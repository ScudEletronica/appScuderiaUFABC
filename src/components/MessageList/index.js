import React, { useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import { ThemeContext } from 'styled-components';
import database from '@react-native-firebase/database'


import { 
  Container, Title, Date, Content, Trash
} from './styles';

import Icon from 'react-native-vector-icons/FontAwesome'

const reference = database().ref('Messages');

const MessageList = ({
  message, coordinator, toggleOverlay, handleID
}) => {
  const { navigate } = useNavigation();
  const { colors } = useContext(ThemeContext);

  
  async function handleDelete() {
    toggleOverlay();
    handleID(message.id)
  }
  
  function handleNavigateToMessage() {
    navigate("Message", {message, coordinator, handleDelete})
  }
  
  return (
    <Container onPress={handleNavigateToMessage}>
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

export default MessageList;