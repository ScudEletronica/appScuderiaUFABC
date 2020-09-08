import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '~/pages/Login';
import Loading from '~/pages/Loading'
import Main from '~/pages/Main'
import About from '~/pages/About'
import Messages from '~/pages/Messages'
import Message from '~/pages/Message'
import LabAndWorkshop from '~/pages/LabAndWorkshop'
import Telemetry from '~/pages/Telemetry'
import MyRequirements from '~/pages/MyRequirements'
import NewRequirement from '~/pages/NewRequirement'
import Review from '~/pages/Review'
import Settings from '~/pages/Settings'
import Profile from '~/pages/Profile'
import Information from '~/pages/Information';
import Notifications from '~/pages/Notifications';
import Drawer from './Drawer';

const { Navigator, Screen } = createStackNavigator();

function AppStack({darkMode, lightMode}) {

  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name="Login" component={Login} />
        <Screen name="Loading" component={Loading} /> 
        <Screen 
          name="Drawer" 
          component={Drawer} 
          initialParams={{darkMode, lightMode}}
        />
        <Screen name="Main" component={Main} />
        <Screen name="About" component={About} />
        <Screen name="Messages" component={Messages} />
        <Screen name="Message" component={Message} />
        <Screen name="LabAndWorkshop" component={LabAndWorkshop} />
        <Screen name="Telemetry" component={Telemetry} />
        <Screen name="MyRequirements" component={MyRequirements} />
        <Screen name="NewRequirement" component={NewRequirement} />
        <Screen name="Review" component={Review} />
        <Screen name="Information" component={Information} />
        <Screen name="Notifications" component={Notifications} />
        <Screen name="Profile" component={Profile} />
      </Navigator>
    </NavigationContainer>
  )
}

export default AppStack;