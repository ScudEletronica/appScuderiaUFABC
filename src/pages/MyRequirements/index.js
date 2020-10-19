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
import Warning from '~/components/Warning';

const reference = database().ref(); 

const MyRequirements = ({ navigation, route }) => {
  const [pendingRequirements, setPendingRequirements] = useState([])
  const [acceptRequirements, setAcceptRequirements] = useState([])
  const [name, setName] = useState('');
  const [coordinator, setCoordinator] = useState(false);
  const [id, setID] = useState('')
  const [overlayText, setOverlayText] = useState('')
  const [visible, setVisible] = useState(false);
  const [confirm, setConfirm] = useState(false);

  const { colors } = useContext(ThemeContext);

  const { user } = route.params;

  useFocusEffect(() => {
    const onChangeValue = reference.on('value', snapshot => {
      var pending = [];
      var accept = [];
      const requirements = snapshot.child('Requirements').val()
      snapshot.child(`Profile/${user}/field`).val() == 'Administração'
      ? setCoordinator(true)
      : setCoordinator(false);

      if(coordinator == true) {
        if(requirements){
          Object.values(requirements).forEach(element => {
            element.accept
            ? accept.push(element)
            : pending.push(element)
          });
        }
      } else {
        setName(snapshot.child(`Profile/${user}/name`).val())
  
        if(requirements) {
          Object.values(requirements).forEach(element => {
            
            if (element.name == name) {
              element.accept
              ? accept.push(element)
              : pending.push(element)
            }
          });
        }
      }
      
      setPendingRequirements(pending)
      setAcceptRequirements(accept)
    })

    return () => reference.off('value', onChangeValue)
  }, [reference])
  
  function handleCreateNewRequirement() {
    navigation.navigate('NewRequirement', {
      requirement: {
        name,
        product: '',
        amount: '',
        id: 1,
        reason: '',
        value: '',
        ways: []
      },
      edit: false
    })
  }

  function toggleOverlay() {
    setVisible(!visible);
  }

  function handleAction(id, action) {
    setID(id);
    setConfirm(action)
    action
    ? setOverlayText("Tem certeza de que quer aceitar essa requisição?")
    : setOverlayText("Tem certeza de que quer cancelar essa requisição?")
    toggleOverlay();
  }

  function handleConfirmOverlay() {
    confirm
    ? handleAccept()
    : handleDelete()
  }
  
  function handleDelete() {
    reference.child(`Requirements/${id}`).remove();
    
    toggleOverlay();
  }
  
  function handleAccept() {
    reference.child(`Requirements/${id}`).update({accept: true})

    toggleOverlay();
  }

  return (
    <Container>
      <Head />
      <Warning 
        text={overlayText}
        cancel={toggleOverlay}
        confirm={handleConfirmOverlay}
        visible={visible}
      />
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
                    coordinator={coordinator}
                    action={handleAction}
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
          {!coordinator &&
            <New 
              style={styles.button} 
              onPress={handleCreateNewRequirement}
            >
              <Icon2 name="plus" size={16}/>
              <NewText>Adicionar Requisição</NewText>
            </New>
          }
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