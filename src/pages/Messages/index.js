import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons'

import { 
  Title, 
} from './styles';

import { 
  Container, Scroll, Content, End, Back
} from '~/styles/global'

import Head from '~/components/Head';
import MessageList from '~/components/MessageList'

const Messages = () => {
  return (
    <Container>
      <Head />
      <Scroll>
        <Content>
          <Title>RECADOS</Title>
          <MessageList />
          <MessageList />
          <MessageList />
          <MessageList />
          <MessageList />
        </Content>
        <End>
          <Back>
            <Icon name="md-chevron-back-circle" size={34}/>
          </Back>
        </End>
      </Scroll>
    </Container>
  );
}

export default Messages;