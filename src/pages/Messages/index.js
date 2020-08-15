import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'

import { 
  Container, Scroll, Content, Title, NewMessage, End, Back
} from './styles';

import Head from '~/components/Head';

const Messages = () => {
  return (
    <Scroll>
    <Head />
      <Content>
        <Title>Recados</Title>
        <NewMessage />
        <NewMessage />
        <NewMessage />
        <NewMessage />
        <NewMessage />
        <End />
        <Back>
          <Icon name="md-chevron-back-circle" size={34}/>
        </Back>
      </Content>
    </Scroll>
  );
}

export default Messages;