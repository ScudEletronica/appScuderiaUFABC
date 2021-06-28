import React, { useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import database from '@react-native-firebase/database';
import Icon from 'react-native-vector-icons/Ionicons'

import {
  Profile, Background1, Background2, Picture, Name, RA, Messages, MessagesTitle, Status, 
} from './styles';

import { Container, Scroll, Content } from '~/styles/global';

import Head from '~/components/Head';
import Message from '~/components/Message';
import Avatar from '~/assets/Picture.png'
import Warning from '~/components/Warning';
import PlaceMin from '~/components/PlaceMin';

const Source = "Status"

const reference = database().ref();

// Pagina Inicial
const Main = ({ route }) => {
  const [status, setStatus] = useState({
    Lab: false, Workshop: false, labRequest: false, workshopRequest: false
  }); // Estado atual do Lab e oficina
  const [picture, setPicture] = useState(' ');
  const [messages, setMessages] = useState([{title: '', id: 0, date: '', content: ' '}]); // Conteúdo dos recados
  const [visible, setVisible] = useState(false); // Visibilidade do aviso
  const [id, setID] = useState(); // Id da mensagem que será apagada

  const { ra, name, coordinator } = route.params; // Dados do usuário

  // Carrega os valores da firebase
  useFocusEffect(() => {
    const onValueChange = reference.on('value', snapshot => {
      setStatus(snapshot.child(Source).val())
      setMessages(snapshot.child('Messages').val())
      setPicture(Avatar);
    })

    return () => reference.off('value', onValueChange)
  }, [reference]);

  // Alterna a visibilidade do Aviso
  function toggleOverlay() {
    setVisible(!visible);
  }
  
  // Determina o id da mensagem a ser 
  function handleID(id) {
    setID(id)
  }
  // Remove um recado
  function handleDelete() {
    reference.child(`Messages/${id}`).remove();
    
    toggleOverlay();
  }

  return (
    <Container>
      {/* Aviso antes de apagar uma mensagem */}
      <Warning
        text="Tem certeza de que quer apagar esse recado?"
        cancel={toggleOverlay}
        confirm={handleDelete}
        visible={visible}
      />
      <Head />
      <Scroll>
        <Content>
          <Background1 source={require('../../assets/Fundo8.png')}>
            <Background2 source={require('../../assets/Fundo7.png')}/>
              <Profile>
                {/* <Picture 
                  source={picture} 
                /> */}
                {/* Informações do usuário */}
                <Icon name={"person-circle-outline"} size={100}/>
                <Name>{name}</Name>
                <RA>{ra}</RA>
              </Profile>
          </Background1>
          
          <Status>
            {/* Mostra o estado atual do Laboratório */}
            <PlaceMin 
              name="Laboratório"
              isOpen={status.Lab}
              request={status.labRequest}
              />
            {/* Mostra o estado atual do Laboratório */}
            <PlaceMin 
              name="Oficina"
              isOpen={status.Workshop}
              request={status.workshopRequest}
            />
          </Status>
          
          {/* Mostra todos os recados, porém apenas parte delas */}
          <Messages>
            <MessagesTitle>RECADOS</MessagesTitle>
            {Object.values(messages).map(message => {
              return (
                <Message 
                  key={message.id}
                  message={message}
                  coordinator={coordinator}
                  toggleOverlay={toggleOverlay}
                  handleID={handleID}
                />
              )
            })}
          </Messages>
        </Content>
      </Scroll>
    </Container>
  );
}

export default Main;