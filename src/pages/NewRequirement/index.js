import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign'
import { StyleSheet } from "react-native";
import { useNavigation } from '@react-navigation/native';

import { 
  Title, NewInput, Inline, NormalText, QuantityInput, Reason, BigInput, New, NewText, Mean, MeanTilte, PriceInput, Create, CreateText, 
} from './styles';

import {
  Container, Scroll, Content, End
} from '~/styles/global'

import Head from '~/components/Head';
import Back from '~/components/Back';

const NewRequirement = () => {
  const { navigate } = useNavigation()

  function handleConfirm() {
    navigate("Review")
  }

  return (
    <Container>
      <Head />
      <Scroll>
        <Content>
          <Title>REQUISIÇÃO DE COMPRA</Title>
          <NewInput 
            placeholder="Insira o Nome do Produto" 
            placeholderTextColor="#969696"
          />
          <Inline>
            <NormalText>Quantidade Requisitada</NormalText>
            <QuantityInput 
              placeholder="Nº" 
              placeholderTextColor="#969696"
            />
          </Inline>
          <Reason>
            <NormalText>Razão da Compra</NormalText>
            <BigInput 
              placeholder="Insira a motivação da compra" 
              placeholderTextColor="#969696"
            />
          </Reason>
          <Mean>
            <MeanTilte>1ª Forma de Compra</MeanTilte>
            <NewInput 
              placeholder="Insira o nome da Empresa" 
              placeholderTextColor="#969696"
            />
            <NewInput 
              placeholder="Meio de Contato" 
              placeholderTextColor="#969696"
            />
            <Inline>
              <NormalText>Preço Unitário</NormalText>
              <PriceInput 
                placeholder="R$ X" 
                placeholderTextColor="#969696"
              />
            </Inline>
            <Inline>
              <NormalText>Taxa Correios</NormalText>
              <PriceInput 
                placeholder="R$ X" 
                placeholderTextColor="#969696"
              />
            </Inline>
          </Mean>
          <New style={styles.button}>
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
          <Back />
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