import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { 
  Container, Title, Date, Content 
} from './styles';

const MessageList = ({title, date, content}) => {
  const { navigate } = useNavigation();

  function handleNavigateToMessage() {
    navigate("Message", {mTitle: title, mDate: date, mText: content})
  }

  return (
    <Container onPress={handleNavigateToMessage}>
      <Title>{title}</Title>
      <Date>{date}</Date>
      <Content>{content.substring(1, 170)} ...</Content>
    </Container>
  );
}

export default MessageList;