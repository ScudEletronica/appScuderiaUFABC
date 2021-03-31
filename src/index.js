import React, {useEffect, useState } from 'react';
import { ThemeProvider } from "styled-components";
import { storeJSON } from "./utils/store";
import '~/config/ReactotronConfig';
import './global'

import light from '~/styles/themes/light'
import dark from '~/styles/themes/dark'

import AppStack from '~/routes/AppStack';

import database from '@react-native-firebase/database'
import messaging from '@react-native-firebase/messaging'
import AsyncStorage from '@react-native-community/async-storage';
import notifee from '@notifee/react-native';

const reference = database().ref();

const App = () => {
  const [theme, setTheme] = useState(light);
  const [messages, setMessages] = useState(0);
  const [status, setStatus] = useState({
    Lab: false, Workshop: false, labRequest: false, workshopRequest: false, pendingRequirements: 0
  });
  const [profile, setProfile] = useState({
    acceptRequirements: 0, user: ''
  })
  const [user, setUser] = useState('')

  async function onMessageReceived(message) {
    const channelId = await notifee.createChannel({
      id: 'default',
      name: 'Default Channel',
    });
  
    const notificationId = await notifee.displayNotification({
      id: message.messageId,
      title: message.notification.title,
      body: message.notification.body,
      android: {
        channelId,
      },
    });
  }

  useEffect(() => {
    getData();
  }, [])

  useEffect(() => {
    const unsubscribe = messaging().onMessage(onMessageReceived);

    return unsubscribe;
  }, []);


  useEffect(() => {
    const onChangeValue = reference.on('value', snapshot => {
      setStatus(snapshot.child('Status').val())
      const newProfile = snapshot.child(`Profile/${global.user}`).val()
      if (newProfile) {
        setProfile(newProfile)
      }
    })

    return () => reference.off('value', onChangeValue)
  }, [reference])

  const getData = async () => {
    var archived;
    archived = await AsyncStorage.getItem('theme')
    if(archived) setTheme(JSON.parse(archived));
    
    archived = await AsyncStorage.getItem('coordinator')
    if(archived) global.coordinator = JSON.parse(archived);
    
    archived = await AsyncStorage.getItem('notifications')
    if(archived) global.notifications = JSON.parse(archived);
  }

  const handleStartLightMode = () => {
    storeJSON('theme', light)
    setTheme(light)
  }

  const handleStartDarkMode = () => {
    storeJSON('theme', dark)
    setTheme(dark)
  }

  return (
    <ThemeProvider theme={theme}>
      <AppStack 
        lightMode={handleStartLightMode} 
        darkMode={handleStartDarkMode} 
      />
    </ThemeProvider>
  )
}

export default App;