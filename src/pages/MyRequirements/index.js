import React, { useContext, useEffect, useState } from 'react';
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
  const [admin, setAdmin] = useState(false);
  const [manager, setManager] = useState(false);
  const [id, setID] = useState('')
  const [overlayText, setOverlayText] = useState('')
  const [visible, setVisible] = useState(false);
  const [confirm, setConfirm] = useState(false);

  const { colors } = useContext(ThemeContext);

  const { user, field, name } = route.params;

  function isAllowed(newField, field, set) {
    const answer = newField == field ? true : false;
    set(answer)
  }

  useEffect(() => {
    isAllowed(field, "Administração", setAdmin)
    isAllowed(field, "Gerência", setManager)
  })

  useFocusEffect(() => {
    const onChangeValue = reference.on('value', snapshot => {
      var pending = [];
      var accept = [];
      const requirements = snapshot.child('Requirements').val()

      if(manager == true) {
        if(requirements){
          Object.values(requirements).forEach(element => {
            element.acceptManager
            ? accept.push(element)
            : pending.push(element)
          });
        }
      } else if(admin == true) {
        if(requirements){
          Object.values(requirements).forEach(element => {
            if(element.acceptAdmin) accept.push(element)
            else if(element.acceptManager) pending.push(element)
          });
        }
      } else {
        if(requirements) {
          Object.values(requirements).forEach(element => {
            
            if (element.name == name) {
              element.acceptAdmin
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
    manager
    ? reference.child(`Requirements/${id}`).update({acceptManager: true})
    : reference.child(`Requirements/${id}`).update({acceptAdmin: true})
    
    // reference.once('value')
    // .then(snapshot => { 
    //   const requirement = snapshot.child(`Requirements/${id}`).val()
    //   Object.values(snapshot.child('Profile').val())
    //     .forEach(element => {
    //       if (element.name == requirement.name) {
    //         reference.child(`Profile/${element.user}`)
    //           .update({
    //             acceptRequirements: element.acceptRequirements + 1
    //           });
    //       }
    //     });
    // })

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
                    allowed={manager || admin}
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
          {!(manager || admin) &&
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