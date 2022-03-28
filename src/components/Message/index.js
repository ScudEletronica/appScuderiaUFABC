import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from 'styled-components';
import Icon from 'react-native-vector-icons/FontAwesome'

import { 
  Container, Title, Date, Content, Trash
} from './styles';

// Item da lista de recados
const Message = ({
  message, coordinator, toggleOverlay, handleID, list
}) => {
  const { navigate } = useNavigation();
  const { colors } = useTheme();

  // Seleciona o estilo do item
  const styles = list ? listStyle : roundStyle;

  // Navega para a página do recado
  function handleNavigateToMessage() {
    navigate("Message", {message, coordinator})
  }
  
  // Deleta o recado
  function handleDelete() {
    toggleOverlay();
    handleID(message.id)
  }

  return (
    <Container 
      style={styles.container}
      onPress={handleNavigateToMessage}
    >
      {/* Botão para deletar o recado */}
      {coordinator 
        && 
        <Trash onPress={handleDelete}>
          <Icon 
            name="trash-o" size={15} color={colors.primaryIcon}
          />
        </Trash>
      }

      {/* Informações do recado */}
      <Title style={styles.title}>{message.title}</Title>
      <Date>{message.date}</Date>
      <Content style={styles.content}>
        {message.content.substring(0, 170).replace(/\r?\n|\r/g, ' ')} ...
      </Content>
    </Container>
  );
}

// Estilo arredondado
const roundStyle = StyleSheet.create({
  container: {
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 5,
    elevation: 5,

    width: 338,
    alignItems: 'center',
    borderRadius: 25,
    marginBottom: 10,
  }, title: {}, content: {}
})

// Estilo lista
const listStyle = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'flex-start',
    marginBottom: 7,
  }, 
  title: {
    textAlign: 'left',
    width: '95%',
  }, 
  content: {
    textAlign: 'justify',
  }
})

export default Message;