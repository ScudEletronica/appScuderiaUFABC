import React, { useState, useContext } from 'react';
import { StyleSheet } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { ThemeContext } from 'styled-components';
import database from "@react-native-firebase/database";
import Markdown from 'react-native-markdown-renderer'
import Icon from 'react-native-vector-icons/AntDesign'

import { 
  Title, MessageView, MessageTitle, MessageDate, MessageText, Buttons, Delete, ButtonText, Edit, EditText
} from './styles';

import { 
  Container, Scroll, Content, End
} from '~/styles/global';

import Head from '~/components/Head';
import Back from '~/components/Back';
import Warning from '~/components/Warning';

const reference = database().ref()

const Message = ({ route, navigation }) => {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [content, setContent] = useState('');
  const [visible, setVisible] = useState(false);

  const { message, coordinator } = route.params;
  const { colors } = useContext(ThemeContext);

  const markdown = StyleSheet.create({
    text: {
      color: colors.primaryText
    }
  })

  useFocusEffect(() =>{
    setTitle(message.title);
    setDate(message.date);
    setContent(message.content);
  })

  function handleEdit() {
    navigation.navigate('NewMessage', { message, edit: true })
  }

  function toggleOverlay() {
    setVisible(!visible);
  }

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
      <Head />
      <Scroll>
        <Content>
          <Title>RECADOS</Title>
          <MessageView>
            <MessageTitle>{title}</MessageTitle>
            <MessageDate>{date}</MessageDate>
            <Markdown style={markdown}>{content}</Markdown>
          </MessageView>
        </Content>
        <End>
          <Back />
          {coordinator 
            && 
            <Buttons>
              <Edit onPress={handleEdit}>
                <Icon name="edit" size={32} color={colors.primaryIcon}/>
                <EditText>Editar</EditText>
              </Edit>
              <Delete 
                style={styles.button}
                onPress={toggleOverlay}
              >
                <ButtonText>Deletar</ButtonText>
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