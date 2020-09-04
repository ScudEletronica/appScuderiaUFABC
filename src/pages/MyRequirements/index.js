import React from 'react';
import { StyleSheet } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons'
import Icon2 from 'react-native-vector-icons/AntDesign'

import { 
  Title, Menu, MenuHeader, MenuTitle, Cancel, CancelText, New, NewText
} from './styles';

import {
  Container, Scroll, Content, End
} from '~/styles/global'

import Head from '~/components/Head';
import Requirement from '~/components/Requirement';
import Back from '~/components/Back';

const MyRequirements = ({ navigation }) => {
  function handleCreateNewRequirement() {
    navigation.navigate('NewRequirement')
  }

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
            <Requirement 
              product="Lorem Ipsum"
              amount={5}
              value={10}
            />
            <Cancel style={styles.button}>
              <CancelText>Cancelar</CancelText>
            </Cancel>
            <Requirement 
              product="Lorem Ipsum"
              amount={5}
              value={18}
            />
            <Cancel style={styles.button}>
              <CancelText>Cancelar</CancelText>
            </Cancel>
          </Menu>
          <Menu>
            <MenuHeader>
              <Icon2 name="checkcircle" size={28} color="#0f0"/>
              <MenuTitle>Aceitas</MenuTitle>
            </MenuHeader>
            <Requirement 
              product="Lorem Ipsum"
              amount={1}
              value={25}
            />
          </Menu>
        </Content>
        <End>
          <New 
            style={styles.button} 
            onPress={handleCreateNewRequirement}
          >
            <Icon2 name="plus" size={16}/>
            <NewText>Adicionar Requisição</NewText>
          </New>
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

export default MyRequirements;