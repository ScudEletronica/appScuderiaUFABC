import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-community/async-storage';

import '~/config/ReactotronConfig';

import { ThemeProvider } from "styled-components";
import light from '~/styles/themes/light'
import dark from '~/styles/themes/dark'

import AppStack from '~/routes/AppStack';

const App = () => {
  const [theme, setTheme] = useState(light)

  const getData = async () => {
    const value = await AsyncStorage.getItem('theme')
    if(value) setTheme(JSON.parse(value));
  }
  
  const storeData = async (value) => {
    const jsonValue = JSON.stringify(value)
    await AsyncStorage.setItem('theme', jsonValue)
  }

  function handleStartLightMode() {
    storeData(light)
    setTheme(light)
  }

  function handleStartDarkMode() {
    storeData(dark)
    setTheme(dark)
  }

  useEffect(() => {
    getData();
  }, [])


  return (
    <ThemeProvider theme={theme}>
      <AppStack 
        darkMode={handleStartDarkMode} 
        lightMode={handleStartLightMode}
      />
    </ThemeProvider>
  )
}

export default App;
