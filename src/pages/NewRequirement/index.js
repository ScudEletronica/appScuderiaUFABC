import React, { useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/AntDesign'
import { StyleSheet } from "react-native";
import { useFocusEffect, useNavigation } from '@react-navigation/native';

import { 
  Title, NewInput, Inline, NormalText, QuantityInput, Reason, BigInput, New, NewText, Mean, MeanTitle, PriceInput, Create, CreateText, 
} from './styles';

import {
  Container, Scroll, Content, End
} from '~/styles/global'

import Head from '~/components/Head';
import Back from '~/components/Back';
import Warning from '~/components/Warning';

const NewRequirement = ({ route }) => {
  const [defaultRequirement, setDefaultRequirement] = useState('')
  const [name, setName] = useState('')
  const [product, setProduct] = useState('');
  const [amount, setAmount] = useState(0);
  const [reason, setReason] = useState('');
  const [ways, setWays] = useState([]);
  const [id, setID] = useState(0);
  const [textWarning, setTextWarning] = useState('');
  const [visible, setVisible] = useState(false);
  const [onlyOne, setOnlyOne] = useState(false);
  const [confirm, setConfirm] = useState(false);

  const { navigate, goBack } = useNavigation();
  const { user, requirement, edit } = route.params;

  useFocusEffect(() => {
    setDefaultRequirement(requirement);
  })
  
  useEffect(() => {
    setID(0);
    setName(requirement.name);
    setProduct(requirement.product);
    setAmount(requirement.amount);
    setReason(requirement.reason);
    setWays(requirement.ways);
  }, [defaultRequirement]);

  function toggleOverlay() {
    setVisible(!visible);
  }

  function handleNewWay() {
    var newID;
    ways.length > 0
    ? newID = ways[ways.length - 1].id+1
    : newID = id + 1
 
    var way = {
      company: '',
      contact: '',
      correiosTax: 0,
      id: newID,
      unitaryPrice: 0,
    }

    setID(newID);

    ways.push(way);
  }

  function setWayItemValue(position, field, value) {
    const updateWays = ways.map((way, index) => {
      if(index == position) {
        return { ...way, [field]: value }
      }

      return way;
    })

    setWays(updateWays);
  }

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

  function handleCancel() {
    var newRequirement = {
      product, amount, reason, ways
    }

    setVisible(false)
    if(Wrote(newRequirement)){
      toggleOverlay();
      setTextWarning("Deseja mesmo voltar? Dessa forma irá perder os dados já preenchidos");
      setConfirm(false);
      setOnlyOne(false);
    } else {
      goBack()
    }
  }

  function handleConfirmOverlay() {
    confirm
    ? toggleOverlay()
    : cancel();
  }

  function cancel() {
    setVisible(false);
    goBack();
  }

  function handleConfirm() {
    var newRequirement = {
      name, product, amount, reason, ways
    }

    if(notEmpty(newRequirement) == true){
      var value = ways[0].unitaryPrice * amount + ways[0].correiosTax;
      ways.forEach(way => {
        const testValue = 
        way.unitaryPrice * amount + way.correiosTax;
        if (testValue < value) {
          value = testValue;
        }
      })
      
      newRequirement = {
        id: defaultRequirement.id, name, product, amount, reason, value, ways
      }

      edit
      ? handleEditRequirement(newRequirement)
      : handleNewRequirement(newRequirement)
    } else {
      setTextWarning(`Insira informações válidas nos campos destinados. \n Por Favor!`);
      setOnlyOne(true);
      toggleOverlay();
      setConfirm(true);
    }
    
  }

  function handleEditRequirement(requirement) {
    navigate("Review", {requirement, edit: true});
  }

  function handleNewRequirement(requirement) {
    navigate("Review", {requirement, edit: false})
  }

  return (
    <Container>
      <Warning
        text={textWarning}
        cancel={toggleOverlay}
        confirm={handleConfirmOverlay}
        visible={visible}
        onlyOne={onlyOne}
      />
      <Head />
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
            <NormalText>Quantidade Requisitada</NormalText>
            <QuantityInput 
              value={amount}
              onChangeText={text => setAmount(Number(text))}
              keyboardType={'numeric'}
              placeholder="Nº" 
              placeholderTextColor="#969696"
            />
          </Inline>
          <Reason>
            <NormalText>Razão da Compra</NormalText>
            <BigInput 
              value={reason}
              onChangeText={text => setReason(text)}
              placeholder="Insira a motivação da compra" 
              placeholderTextColor="#969696"
              multiline
            />
          </Reason>
          {ways.map((way, index) => {
            return (
              <Mean key={way.id}>
                <MeanTitle>{way.id}ª Forma de Compra</MeanTitle>
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
                  <NormalText>Preço Unitário</NormalText>
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
                  <NormalText>Taxa Correios</NormalText>
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
              </Mean>
            )
          })}
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

const styles = StyleSheet.create({
  button: {
    shadowColor: "rgba(0, 0, 0, 0.2)",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 2,
    shadowOpacity: 1,
    elevation: 2,
  }
})

export default NewRequirement;