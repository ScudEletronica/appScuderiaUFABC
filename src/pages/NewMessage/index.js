import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import database from '@react-native-firebase/database'

import { 
  Title, NewInput, InputTitle, BigInput, Buttons, Create, CreateText, Cancel, ButtonText
} from './styles';

import {
  Container, Scroll, Content, End
} from '~/styles/global'

import Head from '~/components/Head';
import Warning from '~/components/Warning';

const reference = database().ref('Messages')

// Novo Recado
const NewMessage = ({navigation, route}) => {
  const [title, setTitle] = useState(); // Titulo do recado
  const [content, setContent] = useState(); // Conteúdo do Recado
  const [defaultTitle, setDefaultTitle] = useState(''); // Titulo inicial do recado
  const [defaultContent, setDefaultContent] = useState(''); // Conteúdo inicial do recado
  const [visible, setVisible] = useState(false); // Visibilidade do aviso
  const [overlayText, setOverlayText] = useState(''); // Define a mensagem do aviso

  const { message, edit } = route.params; // Carrega a mensagem inicial e se é edição ou não

  // Define os valores iniciais do recado
  useFocusEffect(() => {
    setDefaultTitle(message.title);
    setDefaultContent(message.content);
  });

  // Pergunta se usuário deseja cancelar sua ação
  function handleCancel() {
    setVisible(false)
    if(title || content){
      toggleOverlay()
      setTexWarning("Tem certeza que quer cancelar? Todas a suas alterações serão apagadas")
    } else {
      cancel();
    }
  }

  // Cancela a criação ou edição do recado
  function cancel() {
    setTitle();
    setContent();

    navigation.goBack();
  }

  // Alterna a visibilidade do Aviso
  function toggleOverlay() {
    setVisible(!visible);
  }

  // Confirma a criação ou edição do recado
  function handleConfirm() {
    setVisible(false);
    
    edit
    ? handleEdit()
    : handleNew()

    setTitle();
    setContent();
  }

  // Cria um novo recado
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

  // Edita um recado existente
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
      setOverlayText("Nenhuma modificação feita, deseja continuar?");
      toggleOverlay();
    }
  }

  return (
    <Container>
      <Warning
        text={overlayText}
        cancel={toggleOverlay}
        confirm={cancel}
        visible={visible}
      />
      <Head />
      <Scroll>
        <Content>
          <Title>NOVO RECADO</Title>
          {/* Inserção do Titulo do recado */}
          <InputTitle>Titulo</InputTitle>
          <NewInput
            defaultValue={defaultTitle}
            value={title}
            onChangeText={text => setTitle(text)}
            placeholder="Insira o Titulo do Recado" 
            placeholderTextColor="#969696"
            />
          
          {/* Inserção do Conteúdo do recado */}
          <InputTitle>Conteúdo</InputTitle>
          <BigInput 
            multiline 
            defaultValue={defaultContent}
            value={content}
            onChangeText={text => setContent(text)}
            placeholder="Insira o conteúdo do recado" 
            placeholderTextColor="#969696"
          />
        </Content>

        {/* Fim da Página */}
        <End>
          <Buttons>
            {/* Botão de cancelar */}
            <Cancel 
              style={styles.button}
              onPress={handleCancel}
            >
              <ButtonText>Cancelar</ButtonText>
            </Cancel>

            {/* Botão de confirmação */}
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