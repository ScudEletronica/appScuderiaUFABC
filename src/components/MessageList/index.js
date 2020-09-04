import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { 
  Container, Title, Date, Content 
} from './styles';

const MessageList = ({title, date, text}) => {
  const { navigate } = useNavigation();

  function handleNavigateToMessage() {
    navigate("Message")
  }

  return (
    <Container onPress={handleNavigateToMessage}>
      <Title>{title}</Title>
      <Date>{date}</Date>
      <Content>{text}</Content>
    </Container>
  );
}

export default MessageList;