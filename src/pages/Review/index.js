import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign'

import { 
  Title, Subtitle, Intern, Inline, InlineTitle, InlineText, ValueTitle, ValueText, Edit, EditText, Cancel, Confirm, ButtonText
} from './styles';

import {
  Container, Scroll, Content
} from '~/styles/global'

import Head from '~/components/Head';

const Review = () => {
  const { navigate } = useNavigation()

  function handleCancel() {
    navigate('MyRequirements')
  }
  
  function handleConfirm() {
    navigate('MyRequirements')
  }
  
  function handleEdit() {
    navigate('NewRequirement')
  }

  return (
    <Container>
      <Head />
      <Scroll>
        <Content>
          <Title>REVISÃO</Title>
          <Intern>
            <Subtitle>Dados do Pedido</Subtitle>
            <Inline>
              <InlineTitle>Nome: </InlineTitle>
              <InlineText>Lorenzo Cyriacope Fragassi</InlineText>
            </Inline>
            <Inline>
              <InlineTitle>Produto: </InlineTitle>
              <InlineText>Fixador Engate Rápido</InlineText>
            </Inline>
            <Inline>
              <InlineTitle>Quantidade: </InlineTitle>
              <InlineText>1</InlineText>
            </Inline>
            <Subtitle>Dados da Compra</Subtitle>
            <Inline>
              <InlineTitle>Empresa: </InlineTitle>
              <InlineText>AliExpress</InlineText>
            </Inline>
            <Inline>
              <InlineTitle>Contato: </InlineTitle>
              <InlineText>Link do site de compra</InlineText>
            </Inline>
            <Inline>
              <InlineTitle>Preço Unitário: </InlineTitle>
              <InlineText>R$ 52,24</InlineText>
            </Inline>
            <Inline>
              <InlineTitle>Taxa Correios: </InlineTitle>
              <InlineText>R$ 15,00</InlineText>
            </Inline>
            
            <Inline style={{marginTop: 28}}>
              <Inline style={{marginRight: "auto"}}>
                <ValueTitle>Valor: </ValueTitle>
                <ValueText>R$ 67,24</ValueText>
              </Inline>
              <Edit onPress={handleEdit}>
                <Icon name="edit" size={32}/>
                <EditText>Editar</EditText>
              </Edit>
            </Inline>

            <Inline>
              <Cancel 
                style={styles.button}
                onPress={handleCancel}
              >
                <ButtonText>Cancelar</ButtonText>
              </Cancel>
              <Confirm 
                style={styles.button}
                onPress={handleConfirm}
              >
                <ButtonText>Confirmar</ButtonText>
              </Confirm>
            </Inline>
          </Intern>
        </Content>
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
}})

export default Review;