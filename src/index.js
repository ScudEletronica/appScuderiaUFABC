import React, {useEffect, useState } from 'react';
import { ThemeProvider } from "styled-components";
import { storeJSON } from "./utils/store";
import '~/config/ReactotronConfig';
import './global'

import light from '~/styles/themes/light'
import dark from '~/styles/themes/dark'

import AppStack from '~/routes/AppStack';

import messaging from '@react-native-firebase/messaging'
import AsyncStorage from '@react-native-community/async-storage';
import notifee from '@notifee/react-native';

// Primeiro arquivo carregado pelo aparelho
const App = () => {
  const [theme, setTheme] = useState(light); // Variável que determina o tema usado no momento

  // Mostra as notificações quando elas chegarem
  useEffect(() => {
    const unsubscribe = messaging().onMessage(onMessageReceived)
    // Mostra o token. É usado para fazer destes de notificação usando Firebase
    messaging().getToken().then(
      currentToken => console.log('Token: ', currentToken)
    )

    return unsubscribe;
  });

  // Função para apresentar Notificações
  async function onMessageReceived(message) {
    // Cria um canal
    const channelId = await  notifee.createChannel({
      id: 'default',
      name: 'Default Channel',
    });
    
    // Mostra a notificação usando os dados vindo da Firebase
    await notifee.displayNotification({
      id: message.messageId,
      title: message.notification.title,
      body: message.notification.body,
      android: {
        channelId,
        smallIcon: 'icon_round'
      },
    });
  }

  // Carregar dados salvos na memória do aparelho
  useEffect(() => {
    getData();
  }, [])

  // Função para carregar os dados salvos na memória do aparelho
  const getData = async () => {
    var archived;
    // Carrega o tema da memoria do aparelho
    archived = await AsyncStorage.getItem('theme')
    if(archived) setTheme(JSON.parse(archived));
    
    // Carrega as configurações de notificações da memoria do aparelho
    archived = await AsyncStorage.getItem('notifications')
    if(archived) global.notifications = JSON.parse(archived);
  }

  // Seleciona o tema claro
  const handleStartLightMode = () => {
    storeJSON('theme', light)
    setTheme(light)
  }
  
  // Seleciona o tema escuro
  const handleStartDarkMode = () => {
    storeJSON('theme', dark)
    setTheme(dark)
  }

  return (
    // Define o tema do aplicativo
    <ThemeProvider theme={theme}>
      {/* Inicia as rotas */}
      <AppStack 
        lightMode={handleStartLightMode} 
        darkMode={handleStartDarkMode} 
      />
    </ThemeProvider>
  )
}

export default App;