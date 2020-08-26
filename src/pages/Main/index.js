import React from 'react';

import {
  Fundo, Fundo7, Fundo8, Picture, Name, RA, Messages, MessagesTitle, Status, Place, PlaceTitle, Open, Close, StatusText
} from './styles';
import { Container, Scroll, Content } from '~/styles/global';

import Head from '~/components/Head';
import Message from '~/components/Message';

const Main = () => {
  return (
    <Container>
      <Head /> 
      <Scroll>
        <Content>
          <Fundo7 source={require('../../assets/Fundo8.png')} />
          <Fundo8 source={require('../../assets/Fundo7.png')} />
          <Fundo>
            <Picture source={require('../../assets/Picture.png')} />
            <Name>Lorenzo Cyriacope Fragassi</Name>
            <RA>11201811544</RA>
          </Fundo>
          <Status>
            <Place>
              <PlaceTitle>Laboratório</PlaceTitle>
              <Close>
                <StatusText>Fechado</StatusText>
              </Close>
            </Place>
            <Place>
              <PlaceTitle>Oficina</PlaceTitle>
              <Open>
                <StatusText>Aberta</StatusText>
              </Open>
            </Place>
          </Status>
          <Messages>
            <MessagesTitle>RECADOS</MessagesTitle>
            <Message />
            <Message />
            <Message />
            <Message />
          </Messages>
        </Content>
      </Scroll>
    </Container>
  );
}

export default Main;