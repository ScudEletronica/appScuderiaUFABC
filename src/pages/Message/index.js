import React, { useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';

import { 
  Title, MessageView, MessageTitle, MessageDate, MessageText
} from './styles';

import { 
  Container, Scroll, Content, End
} from '~/styles/global';

import Head from '~/components/Head';
import Back from '~/components/Back';

const text = `
  Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.

  Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.

  Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
  
  Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
`

const Message = () => {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [content, setContent] = useState('');

  useFocusEffect(() =>{
    setTitle("Lorem Ipsum");
    setDate("8/16/13");
    setContent(text);
  })

  return (
    <Container>
      <Head />
      <Scroll>
        <Content>
          <Title>RECADOS</Title>
          <MessageView>
            <MessageTitle>{title}</MessageTitle>
            <MessageDate>{date}</MessageDate>
            <MessageText>{content}</MessageText>
          </MessageView>
        </Content>
        <End>
          <Back />
        </End>
      </Scroll>
    </Container>
  );
}

export default Message;