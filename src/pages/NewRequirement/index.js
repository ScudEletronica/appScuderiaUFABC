import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons'
import Icon2 from 'react-native-vector-icons/AntDesign'

import { 
  Title, NewInput, Inline, NormalText, QuantityInput, Reason, BigInput, New, NewText, Mean, MeanTilte, PriceInput, Create, CreateText, 
} from './styles';

import {
  Container, Scroll, Content, End, Back
} from '~/styles/global'

import Head from '~/components/Head';

const NewRequirement = () => {
  return (
    <Container>
      <Head />
      <Scroll>
        <Content>
          <Title>REQUISIÇÃO DE COMPRA</Title>
          <NewInput placeholder="Insira seu Nome" placeholderTextColor="#969696"/>
          <NewInput placeholder="Insira o Nome do Produto" placeholderTextColor="#969696"/>
          <Inline>
            <NormalText>Quantidade Requisitada</NormalText>
            <QuantityInput placeholder="Nº" placeholderTextColor="#969696"/>
          </Inline>
          <Reason>
            <NormalText>Razão da Compra</NormalText>
            <BigInput placeholder="Insira a motivação da compra" placeholderTextColor="#969696"/>
          </Reason>
          <Mean>
            <MeanTilte>1ª Forma de Compra</MeanTilte>
            <NewInput placeholder="Insira o nome da Empresa" placeholderTextColor="#969696"/>
            <NewInput placeholder="Meio de Contato" placeholderTextColor="#969696"/>
            <Inline>
              <NormalText>Preço Unitário</NormalText>
              <PriceInput placeholder="R$ X" placeholderTextColor="#969696"/>
            </Inline>
            <Inline>
              <NormalText>Taxa Correios</NormalText>
              <PriceInput placeholder="R$ X" placeholderTextColor="#969696"/>
            </Inline>
          </Mean>
          <New>
            <Icon2 name="plus" size={16}/>
            <NewText>Adicionar Formas de Compra</NewText>
          </New>
        </Content>
        <End>
          <Create>
            <CreateText>Gerar Requisição</CreateText>
          </Create>
          <Back>
            <Icon name='md-chevron-back-circle' size={34}/>
          </Back>
        </End>
      </Scroll>
    </Container>
  );
}

export default NewRequirement;