import React, { useContext, useEffect, useState} from 'react';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from 'styled-components';
import { storeJSON, storeString } from "~/utils/store";
import AsyncStorage from '@react-native-async-storage/async-storage';
import database from '@react-native-firebase/database';
import messaging from '@react-native-firebase/messaging';

import { 
  Container, Background, Logo, Background1, Background2, Form, Title, Subtitle, Input, LoginBotao, LoginImage, Warning
} from './styles';

import { Scroll } from "~/styles/global"; 
import { AuthContext, useLogin } from '~/contexts/AuthContext';

const reference = database().ref('Profile');

// Pagina de Login
export default function Login() {
  const [user, setUser] = useState(''); // Variável que armazena o Nome de usuário digitado
  const [ra, setRA] = useState(''); // Variável que armazena o RA digitado
  const [raFirebase, setRaFirebase] = useState(''); // Variável que armazena o RA carregado da Firebase a partir do Usuário
  const [wrong, setWrong] = useState(false); // Variável que determina se o login está correto ou não
  const [submit, setSubmit] = useState(false); // Variável que determina a tentativa de login
  const [nothing, setNothing] = useState(false); // Variável que determina se todos os campos foram digitados

  const { navigate } = useNavigation(); // Função de navegação entre rotas
  const { images } = useTheme();
  const { dispatch } = useContext(AuthContext); // Imagens usadas pelos temas

  // Executa o Login
  function Login(
    user, ra, field, coordinator, name
  ) {
    useLogin(dispatch, {user, ra, field, coordinator, name})
    // Determina se esse usuário irá receber as notificações de 
    // requisições para abrir o lab ou oficina
    coordinator
    ? messaging().subscribeToTopic("Request") 
    : messaging().unsubscribeFromTopic("Request")
    
    // Determina se esse usuário irá receber as notificações de 
    // novas requisições
    field == 'Administração' || field == "Gerência"
    ? messaging().subscribeToTopic("Requirement")
    : messaging().unsubscribeFromTopic("Requirement")

    messaging().subscribeToTopic("Donation")
    
    // Navega para a rota com o menu Lateral
    navigate("Drawer", {
      user, ra, field, coordinator, name
    })
  }
  
  // Armazena dados de login na memória do aparelho
  const storeData = async () => {
    await storeString('user', user)
    await storeString('ra', ra)
    
    reference.child(user).once("value").then(async snapshot => {
      const coordinator = snapshot.child('coordinator').val()
      await storeJSON('coordinator', coordinator)
      
      const field = snapshot.child('field').val()
      await storeString('field', field)

      const name = snapshot.child('name').val()
      await storeString('name', name)

      Login(user, ra, field, coordinator, name)
    })
  }
  
  // Controla a tentativa de login
  function handleSubmit() {
    reference.child(user).on("value", async snapshot => {
      setRaFirebase(snapshot.child('ra').val());
    })
    
    setNothing(false)
    setWrong(false)
    
    ra != ''
    ? setSubmit(!submit) : setNothing(true)
  }
  
  // Verifica se o login é valido
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
  
  // Carrega dados de Login da memória do aparelho.
  // Dessa forma o usuário não precisa fazer login 
  // toda vez que entrar no aplicativo
  useEffect(() => {
    const getData = async () => {
      const user = await AsyncStorage.getItem('user');
      const ra = await AsyncStorage.getItem('ra');
      
      if(user && ra) {
        const field = await AsyncStorage.getItem('field');
        var coordinator = await AsyncStorage.getItem('coordinator')
        if (coordinator) coordinator = JSON.parse(coordinator)
        
        const name = await AsyncStorage.getItem('name');
        
        if(field && coordinator && name) Login(user, ra, field, coordinator, name)
        else storeData()
      }
    }
    getData().catch(console.error);
  }, [])
  
  return (
    <Scroll>
      <Container>
        <Background>
          <Background2 source={require('./../../assets/Fundo2.png')} />
          <Background1 source={require('./../../assets/Fundo1.png')} />
          <Logo source={images.capacete} />
        </Background>
        <Form>
            <Title>Bem-Vindo!</Title>
            <Subtitle>Efetue seu login a seguir:</Subtitle>
          {/* Campo para inserir o Usuário */}
          <Input 
            value={user}
            onChangeText={text => setUser(text)}
            placeholder="Insira seu Nome" 
            placeholderTextColor={"#969696"}
            />
          {/* Campo para inserir o RA */}
          <Input 
            value={ra}
            onChangeText={text => setRA(text)}
            placeholder="Insira seu RA" 
            placeholderTextColor={"#969696"} 
          />
          {/* Mensagem de erro caso o login não seja válido */}
          {wrong && <Warning>Usuário ou senha incorretos</Warning>}
          {/* Mensagem de erro caso não seja inserido os dados necessários */}
          {nothing && <Warning>Digite Usuário e senha</Warning>}
          <LoginBotao onPress={handleSubmit}>
            <LoginImage source={images.login} />
          </LoginBotao>
        </Form>
      </Container>
    </Scroll>
  );
}
