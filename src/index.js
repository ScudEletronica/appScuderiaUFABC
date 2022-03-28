import React, {useEffect, useState} from 'react';
import './global'

import light from '~/styles/themes/light'
import dark from '~/styles/themes/dark'

import AppStack from '~/routes/AppStack';

import messaging from '@react-native-firebase/messaging'
import AsyncStorage from '@react-native-async-storage/async-storage';
import notifee from '@notifee/react-native';
import { AuthContextProvider } from './contexts/AuthContext';

// Primeiro arquivo carregado pelo aparelho
const App = () => {
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

  // Carrega as configurações de notificações da memoria do aparelho
  useEffect(() => {
    const getData = async () => {
      var archived = await AsyncStorage.getItem('notifications')
      if(archived) global.notifications = JSON.parse(archived);
    }
    
    getData().catch(console.error);
  }, [])

  return (
    <AuthContextProvider>
      <AppStack />
    </AuthContextProvider>
  )
}

export default App;