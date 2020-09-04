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
import Head from "~/components/Head";


const { Navigator, Screen } = createDrawerNavigator()

function Drawer() {
  return (
    <>
      <Navigator 
        initialRouteName="Main"
        drawerContent={props => <MenuBar {...props} />}
        drawerStyle={{width: 217}}
      >
        <Screen name="Main" component={Main}/>
        <Screen name="About" component={About}/>
        <Screen name="Messages" component={Messages}/>
        <Screen name="Message" component={Message}/>
        <Screen name="LabAndWorkshop" component={LabAndWorkshop}/>
        <Screen name="Telemetry" component={Telemetry}/>
        <Screen name="MyRequirements" component={MyRequirements}/>
        <Screen name="NewRequirement" component={NewRequirement}/>
        <Screen name="Review" component={Review}/>
        <Screen name="Settings" component={Settings}/>
        <Screen name="Profile" component={Profile}/>
        <Screen name="Information" component={Information}/>
        <Screen name="Notifications" component={Notifications}/>
        <Screen name="MenuBar" component={MenuBar}/>
      </Navigator>
    </>
  )
}

export default Drawer;