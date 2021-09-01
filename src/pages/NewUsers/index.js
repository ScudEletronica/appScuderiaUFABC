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

// Novos Usuários
const NewUsers = ({}) => {
  const [newUsers, setNewUsers] = useState({}) // Lista de novos usuários
  const [id, setID] = useState('') // Id do usuário
  const [overlayText, setOverlayText] = useState('') // Define a mensagem do aviso
  const [visible, setVisible] = useState(false); // Visibilidade do aviso
  const [confirm, setConfirm] = useState(false); // Define o tipo de operação

  // Carrega os novos usuários da Firebase
  useFocusEffect(() => {
    const onChangeValue = reference.on('value', snapshot => {
      setNewUsers(snapshot.child("NewUsers").val())
    })

    return () => reference.off('value', onChangeValue)
  })

  // Alterna a visibilidade do Aviso
  function toggleOverlay() {
    setVisible(!visible);
  }
  
  // Define a mensagem do aviso, o local e o tipo de ação quando o aviso receber confirmação
  function handleAction(id, action) {
    setID(id);
    setConfirm(action)
    action
    ? setOverlayText("Tem certeza de que quer cadastrar esse usuário?")
    : setOverlayText("Tem certeza de que quer cancelar a inscrição desse usuário?")
    toggleOverlay();
  }

  // Escolhe uma ação conforme o valor de confirm
  function handleConfirmOverlay() {
    confirm
    ? handleAccept()
    : handleDelete()
  }
  
  // Remove o usuário da lista de novos usuários
  async function handleDelete() {
    await reference.child(`NewUsers/${id}`).remove();
    
    toggleOverlay();
  }

  // Manda um email para o usuário aceito
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
  
  // Aceita o usuário
  async function handleAccept() {
    await reference.once('value')
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
      if (snapshot.child(`Profile/${newUser.user}`)) {
        try {
          sendEmail(newUser.email)
        } catch (error) {
          console.log(error)
        }
        handleDelete()
      } 
    })
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
          {/* Lista de todos os novos usuários */}
          <Menu>
            {newUsers && Object.values(newUsers).map(user => (
              <NewUser 
                key={user.id}
                user={user}
                action={handleAction}
              />
            ))}
          </Menu>
        </Content>

        {/* Fim da Página */}
        <End>
          <Back />
        </End>
      </Scroll>
    </Container>
  );
}

export default NewUsers;