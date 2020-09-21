import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import database from '@react-native-firebase/database'
import { useFocusEffect } from '@react-navigation/native';

import { 
  Title, NewInput, NormalText, BigInput, Buttons, Create, CreateText, Cancel, ButtonText
} from './styles';

import {
  Container, Scroll, Content, End
} from '~/styles/global'

import Head from '~/components/Head';
import Warning from '~/components/Warning';

const reference = database().ref('Messages')

const NewMessage = ({navigation, route}) => {
  const [title, setTitle] = useState();
  const [content, setContent] = useState();
  const [defaultTitle, setDefaultTitle] = useState('');
  const [defaultContent, setDefaultContent] = useState('');
  const [visible, setVisible] = useState(false);
  const [textWarning, setTexWarning] = useState('');

  const { message, edit } = route.params;

  useFocusEffect(() => {
    setDefaultTitle(message.title);
    setDefaultContent(message.content);
  }, [message]);

  function handleCancel() {
    setVisible(false)
    if(title || content){
      toggleOverlay()
      setTexWarning("Tem certeza que quer cancelar? Todas a suas alterações serão apagadas")
    } else {
      cancel();
    }
  }

  function cancel() {
    setTitle();
    setContent();

    navigation.goBack();
  }

  function toggleOverlay() {
    setVisible(!visible);
  }

  function handleConfirm() {
    setVisible(false);
    if(edit){
      handleEdit()
    } else {
      handleNew()
    } 

    setTitle();
    setContent();
  }

  function handleNew() {
    if (title && content) {
      var date = new Date();
      var dd = String(date.getDate()).padStart(2, '0');
      var mm = String(date.getMonth() + 1).padStart(2, '0');
      var yyyy = date.getFullYear();
  
      date = dd + '/' + mm + '/' + yyyy;
  
      const NewReference = reference.push();
      const id = NewReference.key;
  
      NewReference.set({id, title, date, content})
  
      navigation.navigate("Messages");
    } else {
      setTexWarning("Digite Titulo e Conteúdo para continuar, ou deseja cancelar?");
      toggleOverlay();
    }
  }

  function handleEdit() {
    if(title || content) {
      reference.child(message.id).update({title, content});

      var newMessage = {
        id: message.id, date: message.date, title, content
      }

      title ? newMessage.title = title : newMessage.title = defaultTitle
      content ? newMessage.content : newMessage.content = defaultContent
          
      navigation.navigate('Message', {message: newMessage});
    } else {
      setTexWarning("Nenhuma modificação feita, deseja continuar?");
      toggleOverlay();
    }
  }

  return (
    <Container>
      <Warning
        text={textWarning}
        cancel={toggleOverlay}
        confirm={cancel}
        visible={visible}
      />
      <Head />
      <Scroll>
        <Content>
          <Title>NOVO RECADO</Title>
          <NormalText>Titulo</NormalText>
          <NewInput
            defaultValue={defaultTitle}
            value={title}
            onChangeText={text => setTitle(text)}
            placeholder="Insira o Titulo do Recado" 
            placeholderTextColor="#969696"
          />
            <NormalText>Conteúdo</NormalText>
            <BigInput 
              multiline 
              defaultValue={defaultContent}
              value={content}
              onChangeText={text => setContent(text)}
              placeholder="Insira o conteúdo do recado" 
              placeholderTextColor="#969696"
            />
        </Content>
        <End>
          <Buttons>
            <Cancel 
              style={styles.button}
              onPress={handleCancel}
            >
              <ButtonText>Cancelar</ButtonText>
            </Cancel>
            <Create 
              style={styles.button}
              onPress={handleConfirm}
            >
              <CreateText>Gerar Recado</CreateText>
            </Create>
          </Buttons>
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

export default NewMessage;