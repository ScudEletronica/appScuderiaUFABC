import React from "react";
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
import Head from "~/components/Head";
import Registration from "~/pages/Registration";

const { Navigator, Screen } = createDrawerNavigator()

function Drawer() {
  // Dados carregados da Firebase que são reutilizáveis em várias páginas
  // const [logout, setLogout] = useState(false);
  // useEffect(() => navigation.addListener('beforeRemove', (e) => {
  //     if (logout) return;

  //     e.preventDefault();
  //   }
  // ), [logout])

  return (
    // Configuração do menu lateral:
    // initialRouteName: Primeira rota aberta
    // drawerContent: Configuração do Menu lateral
    // drawerStyle: Estilos do menu lateral
      <Navigator 
        initialRouteName="Main"
        drawerContent={props => <MenuBar props={props} />}
        drawerStyle={{width: 217}}
        screenOptions={{ 
          headerShown: true,
          header: props => <Head {...props}/>
        }}
      >
        {/* 
          Configuração das rotas:
            name: Determina o nome da rota
            component: Determina o componente que contem a rota
            initialParams: Determina os valores iniciais na rota 
        */}
        <Screen name="Main" component={Main} />
        <Screen name="About" component={About} />
        <Screen name="Messages" component={Messages} />
        <Screen name="NewMessage" component={NewMessage} />
        <Screen name="Message" component={Message}/>
        <Screen name="LabAndWorkshop" component={LabAndWorkshop} />
        <Screen name="Telemetry" component={Telemetry} />
        <Screen name="MyRequirements" component={MyRequirements} />
        <Screen name="NewRequirement" component={NewRequirement} />
        <Screen name="Review" component={Review} />
        <Screen name="Settings" component={Settings} />
        <Screen name="Profile" component={Profile} />
        <Screen name="Information" component={Information} />
        <Screen name="Notifications" component={Notifications} />
        <Screen name="Registration" component={Registration} />
        <Screen name="MenuBar" component={MenuBar} />
        <Screen name="NewUsers" component={NewUsers} />
      </Navigator>
  )
}

export default Drawer;