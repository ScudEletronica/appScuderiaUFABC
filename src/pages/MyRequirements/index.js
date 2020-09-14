import React, { useContext, useState } from 'react';
import { StyleSheet } from "react-native";
import { ThemeContext } from 'styled-components';
import { useFocusEffect } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons'
import Icon2 from 'react-native-vector-icons/AntDesign'
import database from '@react-native-firebase/database'

import { 
  Title, Menu, MenuHeader, MenuTitle, New, NewText
} from './styles';

import {
  Container, Scroll, Content, End
} from '~/styles/global'

import Head from '~/components/Head';
import Requirement from '~/components/Requirement';
import Back from '~/components/Back';

const reference = database().ref(); 

const MyRequirements = ({ navigation, route }) => {
  const [pendingRequirements, setPendingRequirements] = useState([])
  const [acceptRequirements, setAcceptRequirements] = useState([])

  const { colors } = useContext(ThemeContext);

  const { user } = route.params;

  useFocusEffect(() => {
    const onChangeValue = reference.on('value', snapshot => {
      var pending = [];
      var accept = [];
      const requirements = snapshot.child('Requirements').val()
      const name = snapshot.child(`Profile/${user}/name`).val()

      Object.values(requirements).forEach(element => {
        
        if (element.name = name) {
          element.accept
          ? accept.push(element)
          : pending.push(element)
        }
      });
      
      setPendingRequirements(pending)
      setAcceptRequirements(accept)
    })

    return () => reference.off('value', onChangeValue)
  }, [reference])
  
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
              <Icon name="hourglass-outline" size={28} color={colors.primaryIcon}/>
              <MenuTitle>Pendentes</MenuTitle>
            </MenuHeader>
            {pendingRequirements == []
            ? <Requirement nothing/>
            : pendingRequirements.map(pending => {
                return (
                  <Requirement 
                    key={pending.id}
                    requirement={pending}
                    pending
                  />
                  )
            })}
          </Menu>

          <Menu>
            <MenuHeader>
              <Icon2 name="checkcircle" size={28} color="#0f0"/>
              <MenuTitle>Aceitas</MenuTitle>
            </MenuHeader>
            {acceptRequirements == []
            ? <Requirement nothing/>
            : acceptRequirements.map(accept => {
                return (
                  <Requirement 
                    key={accept.id}
                    requirement={accept}
                  />
                )
            })}
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