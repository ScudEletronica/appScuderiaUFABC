import React, { createRef, useCallback, useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { Formik } from 'formik';

import database from '@react-native-firebase/database'
import Warning from '~/components/Warning';

import { 
  Title, NewInput, InputTitle, BigInput, Buttons, Create, CreateText, Cancel, ButtonText
} from './styles';

import {
  Container, Scroll, Content, End
} from '~/styles/global'

const reference = database().ref('Messages')

// Novo Recado
const NewMessage = ({ navigation, route }) => {
  const [title, setTitle] = useState("Default"); // Titulo do recado
  const [content, setContent] = useState("Default"); // Conteúdo do Recado
  const [visible, setVisible] = useState(false); // Visibilidade do aviso
  const [overlayText, setOverlayText] = useState(''); // Define a mensagem do aviso

  const { message, edit } = route.params; // Carrega a mensagem inicial e se é edição ou não
  const formikRef = createRef();

  function updated () {
    console.log(title, message.title)
    console.log(content, message.content)
    if (title != message.title || content != message.content) {
      setTitle(message.title)
      setContent(message.content)
      return false;
    }
    return true;
  }

  // Define os valores iniciais do recado
  useFocusEffect(
    useCallback(() => {
      if (formikRef.current && !updated()) {
        formikRef.current?.resetForm()
        formikRef.current?.setValues({
          title: message.title, content: message.content
        })
      }
    })
  );

  // Pergunta se usuário deseja cancelar sua ação
  function handleCancel({title, content}) {
    setVisible(false)
    if(title || content){
      toggleOverlay()
      setOverlayText('Tem certeza que quer cancelar? Todas a suas alterações serão apagadas');
    } else {
      cancel();
    }
  }

  // Cancela a criação ou edição do recado
  function cancel() {
    setTitle("");
    setContent("");

    navigation.goBack();
  }

  // Alterna a visibilidade do Aviso
  function toggleOverlay() {
    setVisible(!visible);
  }

  // Confirma a criação ou edição do recado
  function handleConfirm(title, content) {
    setVisible(false);
    
    edit
    ? handleEdit(title, content)
    : handleNew(title, content)

    setTitle();
    setContent();
  }

  // Cria um novo recado
  function handleNew(title, content) {
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
      setOverlayText("Digite Titulo e Conteúdo para continuar, ou deseja cancelar?");
      toggleOverlay();
    }
  }

  // Edita um recado existente
  function handleEdit(title, content) {
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

  const Form  = ({handleChange, handleSubmit, values}) => {
    useEffect(() => navigation.addListener('unfocused', e => {
      console.log("GoBack")
      
      if (values.title || values.content) {
        e.preventDefault();
        handleCancel(values.title, values.content);
      }
    }), [navigation, visible])

    return (
      <Container>
        <Warning
          text={overlayText}
          cancel={toggleOverlay}
          confirm={cancel}
          visible={visible}
        />
        <Scroll>
          <Content>
            <Title>NOVO RECADO</Title>
            {/* Inserção do Titulo do recado */}
              
              <InputTitle>Titulo</InputTitle>
              <NewInput
                value={values.title}
                onChangeText={handleChange('title')}
                placeholder="Insira o Titulo do Recado" 
                placeholderTextColor="#969696"
                />
              
              {/* Inserção do Conteúdo do recado */}
              <InputTitle>Conteúdo</InputTitle>
              <BigInput 
                multiline 
                value={values.content}
                onChangeText={handleChange('content')}
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
                onPress={() => handleCancel(values)}
                >
                <ButtonText>Cancelar</ButtonText>
              </Cancel>

              {/* Botão de confirmação */}
              <Create 
                style={styles.button}
                onPress={handleSubmit}
                >
                <CreateText>Gerar Recado</CreateText>
              </Create>
            </Buttons>
          </End>
        </Scroll>
      </Container>
    )
  }

  return (
      <Formik
        innerRef={formikRef}
        initialValues={{title: message.title, content: message.title}}
        onSubmit={({title, content}) => handleConfirm(title, content)}
      >{Form}</Formik>
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