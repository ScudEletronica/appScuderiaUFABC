import React, { useContext, useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { ThemeContext } from 'styled-components';
import database from '@react-native-firebase/database';

import { 
  Container, Fundo, Logo, Fundo1, Fundo2, Form, Title, Subtitle, Input, LoginBotao, LoginImage, Warning
} from './styles';

import { Scroll } from "~/styles/global"; 
import AsyncStorage from '@react-native-community/async-storage';

const reference = database().ref('Profile');

export default function Login() {
  const [user, setUser] = useState('');
  const [ra, setRA] = useState('');
  const [raFirebase, setRaFirebase] = useState('');
  const [wrong, setWrong] = useState(false);
  const [nothing, setNothing] = useState(false);

  const { navigate } = useNavigation();
  const { images } = useContext(ThemeContext);

  const getData = async () => {
    const user = await AsyncStorage.getItem('user');
    const ra = await AsyncStorage.getItem('ra');
    if(user && ra) navigate("Drawer", {user, ra})
  }

  const storeData = async () => {
    await AsyncStorage.setItem('user', user)
    await AsyncStorage.setItem('ra', ra)
    navigate("Drawer", {user, ra})
  }

  function handleSubmit() {
    reference.child(`${user}/ra`).on("value", snapshot => {
      setRaFirebase(snapshot.val());
    })

    setNothing(false)
    setWrong(false)

    if (ra != '') {
      ra == raFirebase
      ? storeData()
      :  setWrong(true);
    } else {
      setNothing(true)
    }
  }

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
