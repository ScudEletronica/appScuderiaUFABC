import React, { useState } from 'react';
import { Linking } from "react-native";
import { useFocusEffect } from '@react-navigation/native';
import database from '@react-native-firebase/database'
import qs from 'qs'

import { 
  Title, Menu
} from './styles';

import {
  Container, Scroll, Content, End
} from '~/styles/global'

import Head from '~/components/Head';
import Back from '~/components/Back';
import Warning from '~/components/Warning';
import NewUser from '~/components/NewUser';

const reference = database().ref(); 

const NewUsers = ({}) => {
  const [newUsers, setNewUsers] = useState({})
  const [id, setID] = useState('')
  const [overlayText, setOverlayText] = useState('')
  const [visible, setVisible] = useState(false);
  const [confirm, setConfirm] = useState(false);
  const [amount, setAmount] = useState(0);

  useFocusEffect(() => {
    const onChangeValue = reference.on('value', snapshot => {
      setNewUsers(snapshot.child("NewUsers").val())
    })

    return () => reference.off('value', onChangeValue)
  }, [reference])

  function toggleOverlay() {
    setVisible(!visible);
  }

  function handleAction(id, action) {
    setID(id);
    setConfirm(action)
    action
    ? setOverlayText("Tem certeza de que quer cadastrar esse usuário?")
    : setOverlayText("Tem certeza de que quer cancelar a inscrição desse usuário?")
    toggleOverlay();
  }

  function handleConfirmOverlay() {
    confirm
    ? handleAccept()
    : handleDelete()
  }
  
  function handleDelete() {
    reference.child(`NewUsers/${id}`).remove();
    
    toggleOverlay();
  }

  async function sendEmail(to) {
    let url = `mailto:${to}`;
  
    // Create email link query
    const query = qs.stringify({
        subject: "Inscrição no app Scuderia UFABC",
        body: "Você foi aceito no app da Scuderia UFABC baixe o app usando um dos links abaixo: \n Web: https://play.google.com/apps/testing/com.scuderia.ufabc \n PlayStore: https://play.google.com/store/apps/details?id=com.scuderia.ufabc"
    });

    if (query.length) {
        url += `?${query}`;
    }

    // check if we can use this link
    const canOpen = await Linking.canOpenURL(url);

    if (!canOpen) {
        throw new Error('Provided URL can not be handled');
    }

    return Linking.openURL(url);
  }
  
  function handleAccept() {
    reference.once('value')
    .then(snapshot => { 
      const newUser = snapshot.child(`NewUsers/${id}`).val()
      reference.child(`Profile/${newUser.user}`).set({
        acceptRequirements: 0,
        coordinator: newUser.coordinator,
        field: newUser.field,
        labhours: 0,
        name: newUser.name,
        ra: newUser.ra,
        user: newUser.user,
        workshophours: 0
      })

      try {
        sendEmail(newUser.email)
      } catch (error) {
        console.log(error)
      }
    })

    handleDelete()
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
          <Title>Novos Usuários</Title>
          <Menu>
            {newUsers && Object.values(newUsers).map(user => {
              return (
                <NewUser 
                  key={user.id}
                  user={user}
                  action={handleAction}
                />
                )
            })}
          </Menu>
        </Content>
        <End>
          <Back />
        </End>
      </Scroll>
    </Container>
  );
}

export default NewUsers;