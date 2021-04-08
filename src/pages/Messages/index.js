import React, { useState } from 'react';
import { StyleSheet } from "react-native";
import { useFocusEffect } from '@react-navigation/native';
import { storeJSON } from '~/utils/store';
import database from '@react-native-firebase/database';
import Icon from 'react-native-vector-icons/AntDesign'

import { 
  Title, New, NewText,
} from './styles';

import { 
  Container, Scroll, Content, End
} from '~/styles/global'

import Head from '~/components/Head';
import MessageList from '~/components/MessageList'
import Back from '~/components/Back';
import Warning from '~/components/Warning';

const reference = database().ref();

const Messages = ({navigation, route}) => {
  const [messages, setMessages] = useState([{title: '', id: 0, date: '', content: ' '}]);
  const [visible, setVisible] = useState(false);
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

  function toggleOverlay() {
    setVisible(!visible);
  }

  function handleID(id) {
    setID(id)
  }

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
          {Object.values(messages).map(message => {
            return (
              <MessageList 
                key={message.id}
                message={message}
                coordinator={coordinator}
                toggleOverlay={toggleOverlay}
                handleID={handleID}
              />
            )
          })}
        </Content>
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
  },
  overlay: {
    borderRadius: 36,
    width: 293,
    height: 135,
    alignItems: 'center',
    justifyContent: 'center',
  }
})

export default Messages;