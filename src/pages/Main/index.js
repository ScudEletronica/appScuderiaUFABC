import React, { useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';

import {
  Fundo, Fundo7, Fundo8, Picture, Name, RA, Messages, MessagesTitle, Status, Place, PlaceTitle, Open, Close, StatusText
} from './styles';

import { Container, Scroll, Content } from '~/styles/global';

import Head from '~/components/Head';
import Message from '~/components/Message';

const text = `
  Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.

  Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.

  Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
  
  Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
`

const Main = ({route}) => {
  const [labIsOpen, setLabIsOpen] = useState(false);
  const [workshopIsOpen, setWorkshopIsOpen] = useState(true);
  const [name, setName] = useState(' ');
  const [ra, setRA] = useState(0);
  const [picture, setPicture] = useState(' ');

  useFocusEffect(() => {
    setPicture('../../assets/Picture.png');
    setName('Lorenzo Cyriacope Fragassi');
    setRA('11201811544');
  });


  return (
    <Container>
      <Head />
      <Scroll>
        <Content>
          <Fundo7 source={require('../../assets/Fundo8.png')} />
          <Fundo8 source={require('../../assets/Fundo7.png')} />
          
          <Fundo>
            <Picture source={require('../../assets/Picture.png')} />
            <Name>{name}</Name>
            <RA>{ra}</RA>
          </Fundo>
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
            <Message 
              title="Lorem Ipsum"
              date="8/16/13"
              content={text}
            />
            <Message 
              title="Lorem Ipsum"
              date="8/16/13"
              content={text}
            />
            <Message 
              title="Lorem Ipsum"
              date="8/16/13"
              content={text}
            />
            <Message 
              title="Lorem Ipsum"
              date="8/16/13"
              content={text}
            />
          </Messages>
        </Content>
      </Scroll>
    </Container>
  );
}

export default Main;