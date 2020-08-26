import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons'
import Icon2 from 'react-native-vector-icons/AntDesign'

import { 
  Title, Subtitle, Intern, Inline, InlineTitle, InlineText, ValueTitle, ValueText, Edit, Cancel, Confirm, ButtonText
} from './styles';

import {
  Container, Scroll, Content, End, Back
} from '~/styles/global'

import Head from '~/components/Head';

const Review = () => {
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
              <Inline style={{marginLeft: "auto"}}>
                <Icon2 name="edit" size={32}/>
                <Edit>Editar</Edit>
              </Inline>
            </Inline>

            <Inline>
              <Cancel>
                <ButtonText>Cancelar</ButtonText>
              </Cancel>
              <Confirm>
                <ButtonText>Confirmar</ButtonText>
              </Confirm>
            </Inline>
          </Intern>
        </Content>
      </Scroll>
    </Container>
  );
}

export default Review;