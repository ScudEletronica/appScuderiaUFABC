import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { 
  Container, Title, Date, Content 
} from './styles';

const Message = ({title, date, text}) => {
  const { navigate } = useNavigation()

  function handleNavigateToMessage() {
    navigate('Message')
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
      <Content>
        {text}
      </Content>
    </Container>
  );
}

export default Message;