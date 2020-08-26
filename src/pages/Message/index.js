import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons'

import { 
  Title, MessageView, MessageTitle, MessageDate, MessageText
} from './styles';

import { 
  Container, Scroll, Content, End, Back
} from '~/styles/global';

import Head from '~/components/Head';

const text = `
  Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.

  Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.

  Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
  
  Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
`

const Message = () => {
  return (
    <Container>
      <Head />
      <Scroll>
        <Content>
          <Title>RECADOS</Title>
          <MessageView>
            <MessageTitle>Lorem Ipsum</MessageTitle>
            <MessageDate>8/16/13</MessageDate>
            <MessageText>{text}</MessageText>
          </MessageView>
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

export default Message;