import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { 
  Container, Title, Date, Content 
} from './styles';

const Message = ({title, date, content}) => {
  const { navigate } = useNavigation()

  function handleNavigateToMessage() {
    navigate("Message", {mTitle: title, mDate: date, mText: content})
  }

  return (
    <Container 
      style={{
        shadowColor: "rgba(0, 0, 0, 0.25)",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 1,
        shadowRadius: 5,
        elevation: 5,
      }}
      onPress={handleNavigateToMessage}
    >
      <Title>{title}</Title>
      <Date>{date}</Date>
      <Content>{content.substring(1, 170)} ...</Content>
    </Container>
  );
}

export default Message;