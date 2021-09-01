import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Paginas do aplicativo
import Login from '~/pages/Login';
import Loading from '~/pages/Loading'
import Drawer from './Drawer';

const { Navigator, Screen } = createStackNavigator();

function AppStack({darkMode, lightMode}) {
  return (
    // Configuração das rotas dentro do aplicativo
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
      {/* 
        Configuração das rotas:
          name: Determina o nome da rota
          component: Determina o componente que contem a rota 
      */}
        <Screen name="Login" component={Login} />
        <Screen name="Loading" component={Loading} />
        <Screen name="Drawer">
          {(props) => <Drawer darkMode={darkMode} lightMode={lightMode} {...props}/>}
        </Screen>
      </Navigator>
    </NavigationContainer>
  )
}

export default AppStack;