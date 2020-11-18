import React, { useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { storeJSON } from '~/utils/store';
import database from '@react-native-firebase/database';
import Icon from 'react-native-vector-icons/Ionicons'

import {
  Fundo, Fundo7, Fundo8, Picture, Name, RA, Messages, MessagesTitle, Status, Place, PlaceTitle, Open, Request, Close, StatusText
} from './styles';

import { Container, Scroll, Content } from '~/styles/global';

import Head from '~/components/Head';
import Message from '~/components/Message';
import Avatar from '~/assets/Picture.png'
import Warning from '~/components/Warning';

const reference = database().ref();


const Main = ({ route }) => {
  const [status, setStatus] = useState({
    Lab: false, Workshop: false, labRequest: false, workshopRequest: false
  });
  const [name, setName] = useState(' ');
  const [ra, setRA] = useState();
  const [coordinator, setCoordinator] = useState(' ');
  const [picture, setPicture] = useState(' ');
  const [amount, setAmount] = useState(0);
  const [messages, setMessages] = useState([{title: '', id: 0, date: '', content: ' '}]);
  const [visible, setVisible] = useState(false);
  const [id, setID] = useState();

  const { user } = route.params;

  useFocusEffect(() => {
    const onValueChange = reference.on('value', snapshot => {
      setStatus(snapshot.child('Status').val())
      setName(snapshot.child(`Profile/${user}/name`).val());
      setRA(snapshot.child(`Profile/${user}/ra`).val());
      setCoordinator(snapshot.child(`Profile/${user}/coordinator`).val());
      setMessages(snapshot.child('Messages').val())
      setAmount(snapshot.child("Status/amountMessages").val())
      setPicture(Avatar);
    })

    return () => reference.off('value', onValueChange)
  }, [reference]);

  function toggleOverlay() {
    setVisible(!visible);
  }

  function handleID(id) {
    setID(id)
  }

  function handleDelete() {
    reference.child(`Messages/${id}`).remove();
    reference
      .child("Status")
      .update({amountMessages: amount - 1});
    
    storeJSON('messages', amount - 1)
    global.messages = amount - 1

    toggleOverlay();
  }

  return (
    <Container>
      <Warning
        text="Tem certeza de que quer apagar esse recado?"
        cancel={toggleOverlay}
        confirm={handleDelete}
        visible={visible}
      />
      <Head />
      <Scroll>
        <Content>
          <Fundo7 source={require('../../assets/Fundo8.png')}>
            <Fundo8 source={require('../../assets/Fundo7.png')}/>
              <Fundo>
                {/* <Picture 
                  source={picture} 
                /> */}
                <Icon name={"person-circle-outline"} size={100}/>
                <Name>{name}</Name>
                <RA>{ra}</RA>
              </Fundo>
          </Fundo7>
          
          <Status>
            <Place>
              <PlaceTitle>Laboratório</PlaceTitle>
              { status.Lab
                ? <Open>
                    <StatusText>Aberto</StatusText>
                  </Open>
                : status.labRequest
                  ? <Request>
                      <StatusText>Requisitado</StatusText>
                    </Request>
                  : <Close>
                    <StatusText>Fechado</StatusText>
                  </Close>
              }
            </Place>
            <Place>
              <PlaceTitle>Oficina</PlaceTitle>
              { status.Workshop
                ? <Open>
                    <StatusText>Aberta</StatusText>
                  </Open>
                : status.workshopRequest
                  ? <Request>
                      <StatusText>Requisitado</StatusText>
                    </Request>
                  : <Close>
                    <StatusText>Fechada</StatusText>
                  </Close>
              }
            </Place>
          </Status>
          
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