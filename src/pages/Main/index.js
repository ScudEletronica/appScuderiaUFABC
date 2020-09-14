import React, { useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import database from '@react-native-firebase/database';

import {
  Fundo, Fundo7, Fundo8, Picture, Name, RA, Messages, MessagesTitle, Status, Place, PlaceTitle, Open, Close, StatusText
} from './styles';

import { Container, Scroll, Content } from '~/styles/global';

import Head from '~/components/Head';
import Message from '~/components/Message';
import Avatar from '~/assets/Picture.png'

const reference = database().ref();


const Main = ({ route }) => {
  const [labIsOpen, setLabIsOpen] = useState(false);
  const [workshopIsOpen, setWorkshopIsOpen] = useState(false);
  const [name, setName] = useState(' ');
  const [ra, setRA] = useState();
  const [picture, setPicture] = useState(' ');
  const [messages, setMessages] = useState([{title: '', id: 0, date: '', content: ' '}]);

  const { user } = route.params;

  useFocusEffect(() => {
    const onValueChange = reference.on('value', snapshot => {
      setLabIsOpen(snapshot.child('Status/Lab').val())
      setWorkshopIsOpen(snapshot.child('Status/Workshop').val())
      setName(snapshot.child(`Profile/${user}/name`).val());
      setRA(snapshot.child(`Profile/${user}/ra`).val());
      setMessages(snapshot.child('Messages').val())
      setPicture(Avatar);
    })

    return () => reference.off('value', onValueChange)
  }, [reference]);


  return (
    <Container>
      <Head />
      <Scroll>
        <Content>
          <Fundo7 source={require('../../assets/Fundo8.png')}>
            <Fundo8 source={require('../../assets/Fundo7.png')}/>
              <Fundo>
                <Picture 
                  source={picture} 
                />
                <Name>{name}</Name>
                <RA>{ra}</RA>
              </Fundo>
          </Fundo7>
          
          <Status>
            <Place>
              <PlaceTitle>Laboratório</PlaceTitle>
              { labIsOpen
                ? <Open>
                    <StatusText>Aberto</StatusText>
                  </Open>
                : <Close>
                  <StatusText>Fechado</StatusText>
                </Close>
              }
            </Place>
            <Place>
              <PlaceTitle>Oficina</PlaceTitle>
              { workshopIsOpen  
                ? <Open>
                    <StatusText>Aberta</StatusText>
                  </Open>
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
                  title={message.title}
                  date={message.date}
                  content={message.content}
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