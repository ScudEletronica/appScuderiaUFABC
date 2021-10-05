import React, { useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/AntDesign'
import { StyleSheet } from "react-native";
import { useFocusEffect, useNavigation } from '@react-navigation/native';

import { 
  Title, NewInput, Inline, InputTitle, QuantityInput, Reason, BigInput, New, NewText, Way, WayTitle, PriceInput, Create, CreateText, styles
} from './styles';

import {
  Container, Scroll, Content, End
} from '~/styles/global'

import Back from '~/components/Back';
import Warning from '~/components/Warning';

// Nova Requisição
const NewRequirement = ({ route }) => {
  const [defaultRequirement, setDefaultRequirement] = useState('') // Requisição inicial
  const [name, setName] = useState('') // Nome do usuário
  const [product, setProduct] = useState(''); // Nome do produto
  const [amount, setAmount] = useState(0); // Quantidade necessária
  const [reason, setReason] = useState(''); // Razão da compra
  const [ways, setWays] = useState([]); // Formas de compra
  const [wayID, setWayID] = useState(0); // Id da forma de compra
  const [overlayText, setOverlayText] = useState(''); // Define a mensagem do aviso
  const [visible, setVisible] = useState(false); // Visibilidade do aviso
  const [onlyOne, setOnlyOne] = useState(false); // Determina se o avisa terá apenas uma opção
  const [confirm, setConfirm] = useState(false); // Define o tipo de operação

  const { navigate, goBack } = useNavigation();
  const { requirement, edit } = route.params; // Carrega a requisição inicial e se é edição ou não

  // Carrega a requisição inicial
  useFocusEffect(() => {
    setDefaultRequirement(requirement);
  })
  
  // Carrega os valores da requisição
  useEffect(() => {
    setWayID(0);
    setName(requirement.name);
    setProduct(requirement.product);
    setAmount(requirement.amount);
    setReason(requirement.reason);
    setWays(requirement.ways);
  }, [defaultRequirement]);

  // Alterna a visibilidade do Aviso
  function toggleOverlay() {
    setVisible(!visible);
  }

  // Cria uma nova Forma de compra
  function handleNewWay() {
    var newID;
    ways.length > 0
    ? newID = ways[ways.length - 1].id+1
    : newID = wayID + 1
 
    var way = {
      company: '',
      contact: '',
      correiosTax: 0,
      id: newID,
      unitaryPrice: 0,
    }

    setWayID(newID);

    ways.push(way);
  }

  // Atualiza os valores da Forma de compra
  function setWayItemValue(position, field, value) {
    const updateWays = ways.map((way, index) => {
      if(index == position) {
        return { ...way, [field]: value }
      }

      return way;
    })

    setWays(updateWays);
  }

  // Verifica se algum campo não foi preenchido
  function notEmpty(newRequirement) {
    for (const key in newRequirement) {
      if (newRequirement.hasOwnProperty(key)) {
        const element = newRequirement[key];
        if(element == 0 || element == ''){
          return false;
        }
      }
    }

    for (let index = 0; index < ways.length; index++) {
      const way = ways[index];
      for (const key in way) {
        if (way.hasOwnProperty(key)) {
          const element = way[key];
          if(element == 0 || element == ''){
            return false;
          }
        }
      }
    }
    
    return true;
  }
  
  // Verifica se algo foi escrito
  function Wrote(newRequirement) {
    for (const key in newRequirement) {
      if (newRequirement.hasOwnProperty(key)) {
        const element = newRequirement[key];
        const initial = defaultRequirement[key];
        if(element != initial){
          return true;
        }
      }
    }

    for (let index = 0; index < ways.length; index++) {
      const way = ways[index];
      for (const key in way) {
        if (way.hasOwnProperty(key)) {
          const element = way[key];
          if(element != 0 || element != ''){
            return true;
          }
        }
      }
    }
    
    return false;
  }

  // Cancela a escrita da requisição
  function handleCancel() {
    var newRequirement = {
      product, amount, reason, ways
    }

    setVisible(false)
    if(Wrote(newRequirement)){
      toggleOverlay();
      setOverlayText("Deseja mesmo voltar? Dessa forma irá perder os dados já preenchidos");
      setConfirm(false);
      setOnlyOne(false);
    } else {
      goBack()
    }
  }

  // Escolhe a ação conforme o valor de confirm
  function handleConfirmOverlay() {
    confirm
    ? toggleOverlay()
    : cancel();
  }

  // Retorna para a pagina anterior e cancelando a requisição
  function cancel() {
    setVisible(false);
    goBack();
  }

  // Confirma a nova requisição
  function handleConfirm() {
    var newRequirement = {
      name, product, amount, reason, ways
    }

    if(notEmpty(newRequirement)){
      // Escolhe o menor preço
      var value = ways[0].unitaryPrice * amount + ways[0].correiosTax;
      ways.forEach(way => {
        const testValue = way.unitaryPrice * amount + way.correiosTax;
        if (testValue < value) {
          value = testValue;
        }
      })
      
      newRequirement = {
        id: defaultRequirement.id, name, product, amount, reason, value, ways
      }

      navigate("Review", {requirement: newRequirement, edit});
    } else {
      setOverlayText(`Insira informações válidas nos campos destinados. \n Por Favor!`);
      setOnlyOne(true);
      toggleOverlay();
      setConfirm(true);
    }
  }

  return (
    <Container>
      <Warning
        text={overlayText}
        cancel={toggleOverlay}
        confirm={handleConfirmOverlay}
        visible={visible}
        onlyOne={onlyOne}
      />
      <Scroll>
        <Content>
          <Title>REQUISIÇÃO DE COMPRA</Title>
          <NewInput 
            value={product}
            onChangeText={text => setProduct(text)}
            placeholder="Insira o Nome do Produto" 
            placeholderTextColor="#969696"
          />
          <Inline>
            <InputTitle>Quantidade Requisitada</InputTitle>
            <QuantityInput 
              value={amount}
              onChangeText={text => setAmount(Number(text))}
              keyboardType={'numeric'}
              placeholder="Nº" 
              placeholderTextColor="#969696"
            />
          </Inline>
          <Reason>
            <InputTitle>Razão da Compra</InputTitle>
            <BigInput 
              value={reason}
              onChangeText={text => setReason(text)}
              placeholder="Insira a motivação da compra" 
              placeholderTextColor="#969696"
              multiline
            />
          </Reason>

          {/* Formas de compra */}
          {ways.map((way, index) => (
            <Way key={way.id}>
              <WayTitle>{way.id}ª Forma de Compra</WayTitle>
              <NewInput 
                value={way.company}
                onChangeText={text => 
                  setWayItemValue(index, 'company', text)
                }
                placeholder="Insira o nome da Empresa" 
                placeholderTextColor="#969696"
              />
              <NewInput 
                value={way.contact}
                onChangeText={text => 
                  setWayItemValue(index, 'contact', text)
                }
                placeholder="Meio de Contato" 
                placeholderTextColor="#969696"
              />
              <Inline>
                <InputTitle>Preço Unitário</InputTitle>
                <PriceInput 
                  value={way.unitaryPrice}
                  onChangeText={text => 
                    setWayItemValue(index, 'unitaryPrice', Number(text))
                  }
                  keyboardType={'numeric'}
                  placeholder="R$ X" 
                  placeholderTextColor="#969696"
                />
              </Inline>
              <Inline>
                <InputTitle>Taxa Correios</InputTitle>
                <PriceInput 
                  value={way.correiosTax}
                  onChangeText={text => 
                    setWayItemValue(index, 'correiosTax', Number(text))
                  }
                  keyboardType={'numeric'}
                  placeholder="R$ X" 
                  placeholderTextColor="#969696"
                />
              </Inline>
            </Way>
          ))}
          <New 
            onPress={handleNewWay}
            style={styles.button}
          >
            <Icon name="plus" size={16}/>
            <NewText>Adicionar Formas de Compra</NewText>
          </New>
        </Content>
        <End>
          <Create 
            style={styles.button}
            onPress={handleConfirm}
          >
            <CreateText>Gerar Requisição</CreateText>
          </Create>
          <Back cancel={handleCancel}/>
        </End>
      </Scroll>
    </Container>
  );
}

export default NewRequirement;