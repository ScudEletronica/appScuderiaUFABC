import React, {useEffect, useState } from 'react';
import { ThemeProvider } from "styled-components";
import { storeJSON } from "./utils/store";
import '~/config/ReactotronConfig';
import './global'

import { 
  LabNotification, WorkshopNotification, MessageNotification, LabRequestNotification, WorkshopRequestNotification, PendingNotification, AcceptNotification
} from "./services/LocalPushController"

import light from '~/styles/themes/light'
import dark from '~/styles/themes/dark'

import AppStack from '~/routes/AppStack';

import database from '@react-native-firebase/database'
import AsyncStorage from '@react-native-community/async-storage';

const reference = database().ref();

const App = () => {
  const [theme, setTheme] = useState(light);
  const [messages, setMessages] = useState(0);
  const [status, setStatus] = useState({
    Lab: false, Workshop: false, labRequest: false, workshopRequest: false, amountMessages: 0, pendingRequirements: 0
  });
  const [profile, setProfile] = useState({
    acceptRequirements: 0, user: ''
  })
  const [user, setUser] = useState('')

  useEffect(() => {
    getData();
  }, [])

  useEffect(() => {
    const onChangeValue = reference.on('value', snapshot => {
      setStatus(snapshot.child('Status').val())
      if (global.user != '') {
        setProfile(snapshot.child(`Profile/${global.user}`).val())
      }
    })

    return () => reference.off('value', onChangeValue)
  }, [reference])

  useEffect(() => {
    if (global.notifications.labOpen) {
      LabNotification(status.Lab)
    }
  }, [status.Lab])

  useEffect(() => {
    if (status.labRequest && global.coordinator) {
      LabRequestNotification()
    }
  }, [status.labRequest])
  
  useEffect(() => {
    if (global.notifications.workshopOpen) {
      WorkshopNotification(status.Workshop)
    }
  }, [status.Workshop])
  
  useEffect(() => {
    if (status.workshopRequest && global.coordinator) {
      WorkshopRequestNotification(status.Workshop)
    }
  }, [status.workshopRequest])

  useEffect(() => {
    if (global.notifications.messages) {
      if (global.messages < status.amountMessages) {
        console.log(global.messages, status.amountMessages)
        MessageNotification()
        global.messages = status.amountMessages
        storeJSON('messages', global.messages)
      }
    }
    if (global.messages > status.amountMessages) {
      global.messages = status.amountMessages
      storeJSON('messages', global.messages)
    }
  }, [status.amountMessages])

  useEffect(() => {
    if (global.requirements.admin) {
      if (global.requirements.pending < status.pendingRequirements) {
        console.log(global.requirements.pending, status.pendingRequirements)
        PendingNotification()
        global.requirements.pending = status.pendingRequirements
      }
    }
    if (global.requirements.pending > status.pendingRequirements) {
      global.requirements.pending = status.pendingRequirements
    }
    console.log(global.requirements.admin)
    storeJSON('requirements', global.requirements)
  }, [status.pendingRequirements])
  
  useEffect(() => {
    if (
      !global.requirements.admin && 
      global.notifications.requirements
      ) {
      if (global.requirements.accept < profile.acceptRequirements) {
        AcceptNotification()
        global.requirements.accept = profile.acceptRequirements
      }
    }
    if (global.requirements.accept > profile.acceptRequirements) {
      global.requirements.accept = profile.acceptRequirements
    }
    storeJSON('requirement', global.requirements)
    console.log('Accept', global.requirements.accept, profile.acceptRequirements)
  }, [profile.acceptRequirements])

  const getData = async () => {
    var archived;
    archived = await AsyncStorage.getItem('theme')
    if(archived) setTheme(JSON.parse(archived));
    
    archived = await AsyncStorage.getItem('messages')
    if(archived) global.messages = JSON.parse(archived);
    
    archived = await AsyncStorage.getItem('coordinator')
    if(archived) global.coordinator = JSON.parse(archived);
    
    archived = await AsyncStorage.getItem('notifications')
    if(archived) global.notifications = JSON.parse(archived);

    archived = await AsyncStorage.getItem('requirements')
    if(archived) global.requirements = JSON.parse(archived);
    console.log(global.requirements)
    
    archived = await AsyncStorage.getItem('user')
    if(archived) global.user = archived;
  }

  function handleStartLightMode() {
    storeJSON('theme', light)
    setTheme(light)
  }

  function handleStartDarkMode() {
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