import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

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
import MenuBar from "~/components/MenuBar";

const { Navigator, Screen } = createDrawerNavigator()

function Drawer({route}) {
  const { darkMode, lightMode, user } = route.params;

  return (
    <>
      <Navigator 
        initialRouteName="Main"
        drawerContent={props => <MenuBar user={user} props={props} />}
        drawerStyle={{width: 217}}
      >
        <Screen 
          name="Main" 
          component={Main} 
          initialParams={{user}}
        />
        <Screen name="About" component={About} />
        <Screen 
          name="Messages" 
          component={Messages}
          initialParams={{user}}
        />
        <Screen name="Message" component={Message}/>
        <Screen 
          name="LabAndWorkshop" 
          component={LabAndWorkshop}
          initialParams={{user}}
        />
        <Screen name="Telemetry" component={Telemetry}
        />
        <Screen 
          name="MyRequirements" 
          component={MyRequirements}
          initialParams={{user}}
        />
        <Screen name="NewRequirement" component={NewRequirement}/>
        <Screen name="Review" component={Review}/>
        <Screen 
          name="Settings" 
          component={Settings} 
          initialParams={{darkMode, lightMode}}
        />
        <Screen 
          name="Profile" 
          component={Profile}
          initialParams={{user}}
        />
        <Screen 
          name="Information" 
          component={Information}
          initialParams={{user}}
        />
        <Screen name="Notifications" component={Notifications}/>
        <Screen 
          name="MenuBar" 
          component={MenuBar}
          initialParams={{user}}
        />
      </Navigator>
    </>
  )
}

export default Drawer;