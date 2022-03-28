import React, { useContext, useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Paginas do aplicativo
import Login from '~/pages/Login';
import Loading from '~/pages/Loading'
import Drawer from './Drawer';
import { useTheme } from '~/contexts/AuthContext';
import { ThemeProvider } from 'styled-components';

const { Navigator, Screen } = createStackNavigator();

function AppStack() {
  const theme = useTheme();

  return (
    // Define o tema do aplicativo
    <ThemeProvider theme={theme}>
      {/* Inicia as rotas */}
      {/* Configuração das rotas dentro do aplicativo */}
      <NavigationContainer>
        <Navigator screenOptions={{ headerShown: false }}>
        {/* 
          Configuração das rotas:
            name: Determina o nome da rota
            component: Determina o componente que contem a rota 
        */}
          <Screen name="Login" component={Login} />
          <Screen name="Loading" component={Loading} />
          <Screen name="Drawer" component={Drawer} />
        </Navigator>
      </NavigationContainer>
    </ThemeProvider>
  )
}

export default AppStack;