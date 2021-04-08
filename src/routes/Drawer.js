import React, { useEffect, useState } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Main from '~/pages/Main'
import About from '~/pages/About'
import Messages from '~/pages/Messages'
import NewMessage from '~/pages/NewMessage'
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
import NewUsers from "~/pages/NewUsers";
import MenuBar from "~/components/MenuBar";

const { Navigator, Screen } = createDrawerNavigator()

function Drawer({lightMode, darkMode, route, navigation}) {
  const { user, ra, field, coordinator, name } = route.params;

  return (
    <Navigator 
      initialRouteName="Main"
      drawerContent={props => <MenuBar user={user} props={props} />}
      drawerStyle={{width: 217}}
    >
      <Screen 
        name="Main" 
        component={Main} 
        initialParams={{user, name, ra, coordinator}}
      />
      <Screen name="About" component={About} />
      <Screen 
        name="Messages" 
        component={Messages}
        initialParams={{coordinator}}
      />
      <Screen 
        name="NewMessage" 
        component={NewMessage} 
      />
      <Screen name="Message" component={Message}/>
      <Screen 
        name="LabAndWorkshop" 
        component={LabAndWorkshop}
        initialParams={{user, coordinator}}
      />
      <Screen name="Telemetry" component={Telemetry}
      />
      <Screen 
        name="MyRequirements" 
        component={MyRequirements}
        initialParams={{user, name, field}}
      />
      <Screen 
        name="NewRequirement" 
        component={NewRequirement}
        initialParams={{user}}
      />
      <Screen name="Review" component={Review}/>
      <Screen name="Settings" initialParams={{coordinator}}>
        {(props) => <Settings 
        darkMode={darkMode} lightMode={lightMode} {...props}/>}
      </Screen>
      <Screen 
        name="Profile" 
        component={Profile}
        initialParams={{user, name, ra}}
      />
      <Screen 
        name="Information" 
        component={Information}
        initialParams={{user, field}}
      />
      <Screen 
        name="Notifications" 
        component={Notifications}
      />
      <Screen 
        name="MenuBar" 
        component={MenuBar}
        initialParams={{user}}
      />
      <Screen name="NewUsers" component={NewUsers} />
    </Navigator>
  )
}

export default Drawer;