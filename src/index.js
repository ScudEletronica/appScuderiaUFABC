import React, { useState } from 'react';
import usePersistedState from './utils/usePersistedState';

import '~/config/ReactotronConfig';

import { ThemeProvider } from "styled-components";
import light from '~/styles/themes/light'
import dark from '~/styles/themes/dark'

import AppStack from '~/routes/AppStack';


const App = () => {
  const [theme, setTheme] = useState(light)
  
  function handleStartLightMode() {
    setTheme(light)
  }

  function handleStartDarkMode() {
    setTheme(dark)
  }

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
