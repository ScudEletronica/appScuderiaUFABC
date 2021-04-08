import React, { useContext, useEffect, useState} from 'react';
import { useNavigation } from '@react-navigation/native';
import { ThemeContext } from 'styled-components';
import AsyncStorage from '@react-native-community/async-storage';
import database from '@react-native-firebase/database';
import messaging from '@react-native-firebase/messaging';

import { storeJSON, storeString } from "~/utils/store";

import { 
  Container, Fundo, Logo, Fundo1, Fundo2, Form, Title, Subtitle, Input, LoginBotao, LoginImage, Warning
} from './styles';

import { Scroll } from "~/styles/global"; 

const reference = database().ref('Profile');

export default function Login() {
  const [user, setUser] = useState('');
  const [ra, setRA] = useState('');
  const [raFirebase, setRaFirebase] = useState('');
  const [wrong, setWrong] = useState(false);
  const [coordinator, setCoordinator] = useState(false);
  const [submit, setSubmit] = useState(false);
  const [nothing, setNothing] = useState(false);

  const { navigate } = useNavigation();
  const { images } = useContext(ThemeContext);

  function Login(user, ra) {
    var field, coordinator, name
    reference.child(user).on("value", snapshot => {
      coordinator = snapshot.child('coordinator').val()
      name = snapshot.child('name').val()

      global.coordinator = snapshot.child('coordinator').val()
      global.coordinator
      ? messaging().subscribeToTopic("Request")
      : messaging().unsubscribeFromTopic("Request")

      field = snapshot.child('field').val() 
      field == 'Administração' || field == "Gerência"
      ? messaging().subscribeToTopic("Requirement")
      : messaging().unsubscribeFromTopic("Requirement")
      navigate("Drawer", {
        user, ra, field, coordinator, name
      })
    })
  }

  const getData = async () => {
    const user = await AsyncStorage.getItem('user');
    const ra = await AsyncStorage.getItem('ra');
    
    if(user && ra) Login(user, ra)
  }

  const storeData = async () => {
    storeString('user', user)
    storeString('ra', ra)
    storeJSON('coordinator', coordinator)

    global.coordinator = coordinator;
    Login(user, ra)
  }

  function handleSubmit() {
    reference.child(user).on("value", async snapshot => {
      setRaFirebase(snapshot.child('ra').val());
      setCoordinator(snapshot.child('coordinator').val())
    })

    setNothing(false)
    setWrong(false)
    
    ra != ''
    ? setSubmit(!submit) : setNothing(true)
  }

  useEffect(() => {
    if (!nothing && ra != '') {
      if(ra == raFirebase) {
        storeData() 
        setWrong(false)
        setRA('')
        setUser('')
      } else {
        setWrong(true);
      }
    }
  }, [submit, raFirebase])

  getData()

  return (
    <Scroll>
      <Container>
        <Fundo>
          <Fundo2 source={require('./../../assets/Fundo2.png')} />
          <Fundo1 source={require('./../../assets/Fundo1.png')} />
          <Logo source={images.capacete} />
        </Fundo>
        <Form>
            <Title>Bem-Vindo!</Title>
            <Subtitle>Efetue seu login a seguir:</Subtitle>
          <Input 
            value={user}
            onChangeText={text => setUser(text)}
            placeholder="Insira seu Nome" 
            placeholderTextColor={"#969696"}
          />
          <Input 
            value={ra}
            onChangeText={text => setRA(text)}
            placeholder="Insira seu RA" 
            placeholderTextColor={"#969696"} 
          />
          {wrong && <Warning>Usuário ou senha incorretos</Warning>}
          {nothing && <Warning>Digite Usuário e senha</Warning>}
          <LoginBotao onPress={handleSubmit}>
            <LoginImage source={images.login} />
          </LoginBotao>
        </Form>
      </Container>
    </Scroll>
  );
}
