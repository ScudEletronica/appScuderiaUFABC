import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons'
import Icon2 from 'react-native-vector-icons/AntDesign'

import { 
  Title, Menu, MenuHeader, MenuTitle, Cancel, CancelText, New, NewText
} from './styles';

import {
  Container, Scroll, Content, End, Back
} from '~/styles/global'

import Head from '~/components/Head';
import Requirement from '~/components/Requirement';

const MyRequirements = () => {
  return (
    <Container>
      <Head />
      <Scroll>
        <Content>
          <Title>MINHAS REQUISIÇÕES</Title>
          <Menu>
            <MenuHeader>
              <Icon name="hourglass-outline" size={28} color="#000"/>
              <MenuTitle>Pendentes</MenuTitle>
            </MenuHeader>
            <Requirement />
            <Cancel>
              <CancelText>Cancelar</CancelText>
            </Cancel>
          </Menu>
          <Menu>
            <MenuHeader>
              <Icon2 name="checkcircle" size={28} color="#0f0"/>
              <MenuTitle>Aceitas</MenuTitle>
            </MenuHeader>
            <Requirement />
          </Menu>
        </Content>
        <End>
          <New>
            <Icon2 name="plus" size={16}/>
            <NewText>Adicionar Requisição</NewText>
          </New>
          <Back>
            <Icon name='md-chevron-back-circle' size={34}/>
          </Back>
        </End>
      </Scroll>
    </Container>
  );
}

export default MyRequirements;