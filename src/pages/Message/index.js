import React, { useState, useContext } from 'react';
import { StyleSheet } from 'react-native';
import { ThemeContext } from 'styled-components';
import { useUser } from '~/contexts/AuthContext';
import database from "@react-native-firebase/database";
import Markdown from 'react-native-markdown-display'
import Icon from 'react-native-vector-icons/AntDesign'

import { 
  Title, MessageView, MessageTitle, MessageDate, MessageText, Buttons, Delete, DeleteText, Edit, EditText
} from './styles';

import { 
  Container, Scroll, Content, End
} from '~/styles/global';

import Back from '~/components/Back';
import Warning from '~/components/Warning';

const reference = database().ref()

// Recado completo
const Message = ({ route, navigation }) => {
  const [visible, setVisible] = useState(false); // Visibilidade do aviso

  const { message, coordinator } = useUser(); // carrega os valores do mensagem
  const { colors } = useContext(ThemeContext);

  const markdown = StyleSheet.create({
    text: {
      color: colors.primaryText
    }
  })

  // Vai para edição do recado
  function handleEdit() {
    navigation.navigate('NewMessage', { message, edit: true })
  }

  // Alterna a visibilidade do Aviso
  function toggleOverlay() {
    setVisible(!visible);
  }

  // Deleta o Recado
  function handleDelete() {
    reference.child(`Messages/${message.id}`).remove();

    toggleOverlay();

    navigation.navigate('Messages')
  }

  return (
    <Container>
      <Warning
        text="Tem certeza de que quer apagar esse recado?"
        cancel={toggleOverlay}
        confirm={handleDelete}
        visible={visible}
      />
      <Scroll>
        <Content>
          <Title>RECADOS</Title>

          {/* Mensagem com Titulo, Data e Conteúdo */}
          <MessageView>
            <MessageTitle>{message.title}</MessageTitle>
            <MessageDate>{message.date}</MessageDate>
            <Markdown style={markdown}>{message.content}</Markdown>
          </MessageView>
        </Content>

        {/* Fim da Página */}
        <End>
          <Back />
          {coordinator 
            && 

            // Botões para edição e remoção do recado
            <Buttons>
              <Edit onPress={handleEdit}>
                <Icon name="edit" size={32} color={colors.primaryIcon}/>
                <EditText>Editar</EditText>
              </Edit>
              <Delete 
                style={styles.button}
                onPress={toggleOverlay}
              >
                <DeleteText>Deletar</DeleteText>
              </Delete>
            </Buttons>
          }
        </End>
      </Scroll>
    </Container>
  );
}

const styles = StyleSheet.create({
  button: {
  shadowColor: "rgba(0, 0, 0, 0.2)",
  shadowOffset: { width: 0, height: 2 },
  shadowRadius: 2,
  shadowOpacity: 1,
  elevation: 2,
  }
})

export default Message;