import React, { useState } from 'react';
import database from '@react-native-firebase/database';
import { useFocusEffect } from '@react-navigation/native';

import { 
  Title, 
} from './styles';

import { 
  Container, Scroll, Content, End
} from '~/styles/global'

import Head from '~/components/Head';
import MessageList from '~/components/MessageList'
import Back from '~/components/Back';

const reference = database().ref();

const Messages = () => {
  const [messages, setMessages] = useState([{title: '', id: 0, date: '', content: ' '}]);

  useFocusEffect(() => {
    const onValueChange =reference.on('value', snapshot => {
      setMessages(snapshot.child('Messages').val())
    })

    return () => reference.off('value', onValueChange)
  })

  return (
    <Container>
      <Head />
      <Scroll>
        <Content>
          <Title>RECADOS</Title>
          {Object.values(messages).map(message => {
            return (
              <MessageList 
                key={message.id}
                title={message.title}
                date={message.date}
                content={message.content}
              />
            )
          })}
        </Content>
        <End>
          <Back />
        </End>
      </Scroll>
    </Container>
  );
}

export default Messages;