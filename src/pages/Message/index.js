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

const Message = ({route}) => {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [content, setContent] = useState('');

  const { mTitle, mDate, mText } = route.params;

  useFocusEffect(() =>{
    setTitle(mTitle);
    setDate(mDate);
    setContent(mText);
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