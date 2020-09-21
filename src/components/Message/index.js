import React, { useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import { ThemeContext } from 'styled-components';
import database from '@react-native-firebase/database'

import { 
  Container, Title, Date, Content, Trash
} from './styles';

import Icon from 'react-native-vector-icons/FontAwesome'

const reference = database().ref('Messages');

const Message = ({
  message, coordinator, toggleOverlay, handleID
}) => {
  const { navigate } = useNavigation();
  const { colors } = useContext(ThemeContext);

  function handleNavigateToMessage() {
    navigate("Message", {message, coordinator})
  }
  
  async function handleDelete() {
    toggleOverlay();
    handleID(message.id)
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
      {coordinator 
        && 
        <Trash onPress={handleDelete}>
          <Icon 
            name="trash-o" 
            size={15} 
            color={colors.primaryIcon}
          />
        </Trash>
      }
      <Title>{message.title}</Title>
      <Date>{message.date}</Date>
      <Content>{message.content.substring(0, 170)} ...</Content>
    </Container>
  );
}

export default Message;