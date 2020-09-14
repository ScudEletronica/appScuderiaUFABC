import React, { useContext, useState } from 'react';
import { StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ThemeContext } from 'styled-components';
import Icon from 'react-native-vector-icons/AntDesign'

import { 
  Title, Subtitle, Intern, Inline, InlineTitle, InlineText, ValueTitle, ValueText, Edit, EditText, Cancel, Confirm, ButtonText, Way, WayTitle
} from './styles';

import {
  Container, Scroll, Content
} from '~/styles/global'

import Head from '~/components/Head';

const Review = ({ route }) => {
  const { navigate } = useNavigation()
  const { requirement } = route.params;
  const { colors } = useContext(ThemeContext)

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
              <InlineText>{requirement.name}</InlineText>
            </Inline>
            <Inline>
              <InlineTitle>Produto: </InlineTitle>
              <InlineText>{requirement.product}</InlineText>
            </Inline>
            <Inline>
              <InlineTitle>Quantidade: </InlineTitle>
              <InlineText>{requirement.amount}</InlineText>
            </Inline>
            <Subtitle>Dados da Compra</Subtitle>
            {Object.values(requirement.Ways).map(ways => {
              return (
                <Way key={ways.id}>
                  <WayTitle>{ways.id}ª Forma de Compra</WayTitle>
                  <Inline>
                    <InlineTitle>Empresa: </InlineTitle>
                    <InlineText>{ways.company}</InlineText>
                  </Inline>
                  <Inline>
                    <InlineTitle>Contato: </InlineTitle>
                    <InlineText>{ways.contact}</InlineText>
                  </Inline>
                  <Inline>
                    <InlineTitle>Preço Unitário: </InlineTitle>
                    <InlineText>R$ {ways.unitaryprice.toFixed(2)}</InlineText>
                  </Inline>
                  <Inline>
                    <InlineTitle>Taxa Correios: </InlineTitle>
                    <InlineText>R$ {ways.correiosTax.toFixed(2)}</InlineText>
                  </Inline>
                </Way>
              )
            })}
            
            <Inline style={{marginTop: 28}}>
              <Inline style={{marginRight: "auto"}}>
                <ValueTitle>Valor: </ValueTitle>
                <ValueText>
                  R$ {requirement.value.toFixed(2)}
                </ValueText>
              </Inline>
              <Edit onPress={handleEdit}>
                <Icon name="edit" size={32} color={colors.primaryIcon}/>
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