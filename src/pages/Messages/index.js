import React, { useState } from 'react';
import { StyleSheet } from "react-native";
import { useFocusEffect } from '@react-navigation/native';
import database from '@react-native-firebase/database';
import Icon from 'react-native-vector-icons/AntDesign'

import { 
  Title, New, NewText,
} from './styles';

import { 
  Container, Scroll, Content, End
} from '~/styles/global'

import Head from '~/components/Head';
import Message from '~/components/Message'
import Back from '~/components/Back';
import Warning from '~/components/Warning';

const reference = database().ref();


// Lista de recados
const Messages = ({navigation, route}) => {
  const [messages, setMessages] = useState([{title: '', id: 0, date: '', content: ' '}]);
  const [visible, setVisible] = useState(false); // Visibilidade do aviso
  const [id, setID] = useState();

  const { coordinator } = route.params

  useFocusEffect(() => {
    const onValueChange =reference.on('value', snapshot => {
      setMessages(snapshot.child('Messages').val())
    })

    return () => reference.off('value', onValueChange)
  })

  function handleCreateNewRequirement() {
    navigation.navigate('NewMessage', {
      message: { title: '', content: '' }, edit: false
    })
  }

  // Alterna a visibilidade do Aviso
  function toggleOverlay() {
    setVisible(!visible);
  }

  // Seleciona o id da mensagem a ser apagada
  function handleID(id) {
    setID(id)
  }

  // Deleta uma mensagem
  function handleDelete() {
    reference.child(`Messages/${id}`).remove();

    toggleOverlay();
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

          {/* Mostra todos os recados */}
          {Object.values(messages).map(message => (
            <Message
              key={message.id}
              message={message}
              coordinator={coordinator}
              toggleOverlay={toggleOverlay}
              handleID={handleID}
              list
            />
          ))}
        </Content>

        {/* Fim da pagina */}
        <End>
          {coordinator 
            && 
            <New 
              style={styles.button} 
              onPress={handleCreateNewRequirement}
            >
              <Icon name="plus" size={16}/>
              <NewText>Adicionar Recado</NewText>
            </New>
          }
          <Back />
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

export default Messages;