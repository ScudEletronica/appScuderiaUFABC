import React from 'react';
import { StyleSheet } from "react-native";

import { 
  Container, Title, Date, Content 
} from './styles';

const MessageList = () => {
  return (
    <Container>
      <Title>Lorem Ipsum</Title>
      <Date>8/16/13</Date>
      <Content>
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
      </Content>
    </Container>
  );
}

export default MessageList;