import React, {useEffect, useState } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { ThemeProvider } from "styled-components";
import '~/config/ReactotronConfig';

import light from '~/styles/themes/light'
import dark from '~/styles/themes/dark'

import AppStack from '~/routes/AppStack';
import { LabNotification, WorkshopNotification } from "./services/LocalPushController"

import database from '@react-native-firebase/database'

const reference = database().ref();

const App = () => {
  const [theme, setTheme] = useState(light);
  const [status, setStatus] = useState({
    Lab: false, Workshop: false, labRequest: false, workshopRequest: false, amountMessages: 0
  });
  const [notifications, setNotifications] = useState({
    labOpen: false, workshopOpen: false, newMessage: false, requirement: false
  })

  useEffect(() => {
    const onChangeValue = reference.on('value', snapshot => {
      setStatus(snapshot.child('Status').val())
    })

    return () => reference.off('value', onChangeValue)
  }, [reference])

  useEffect(() => {
    LabNotification(status.Lab)
  }, [status.Lab])
  
  useEffect(() => {
    WorkshopNotification(status.Workshop)
  }, [status.Workshop])
  
  const getData = async () => {
    const archiveTheme = await AsyncStorage.getItem('theme')
    if(archiveTheme) setTheme(JSON.parse(archiveTheme));
  }
  
  const storeData = async (key, value) => {
    const jsonValue = JSON.stringify(value)
    await AsyncStorage.setItem(key, jsonValue)
  }

  function handleStartLightMode() {
    storeData('theme', light)
    setTheme(light)
  }

  function handleStartDarkMode() {
    storeData('theme', dark)
    setTheme(dark)
  }

  useEffect(() => {
    getData();
  }, [])

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