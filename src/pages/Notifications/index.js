import React, { useState, useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { useFocusEffect } from '@react-navigation/native';
import { storeJSON } from '~/utils/store';
import Icon from 'react-native-vector-icons/FontAwesome5';

import { 
  Title, Intern, Inline, InlineText, Toggle
} from './styles';

import {
  Container, Scroll, Content, End
} from '~/styles/global'

import Back from '~/components/Back';
import messaging from '@react-native-firebase/messaging';

// COnfiguração das notificações
const Notifications = () => {
  const [notifications, setNotifications] = useState({
    Lab: false, Workshop: false, Message: false, Requirement: false
  }); // Configuração da notificação do laboratório 

  const { colors } = useContext(ThemeContext);
  const color = colors.primaryIcon;

  // Carrega a configuração das notificações 
  useFocusEffect(() => {
    setNotifications(global.notifications)
  })

  // Alterna a configuração das notificações
  function toggleNotification(name) {
    setNotifications({...notifications, [name]: !notifications[name]})

    global.notifications[name] = !global.notifications[name]

    storeJSON('notifications', global.notifications)
    notifications[name]
    ? messaging().subscribeToTopic(name)
    : messaging().unsubscribeFromTopic(name)
  }

  // Mostra o Botão de Notificação
  const NotificationButton = ({event, toggle, isOn}) => (
    <Inline>
      <InlineText>Notificar quando {event}?</InlineText>
      <Toggle onPress={toggle}>
        <Icon 
          name={isOn ? "toggle-on" : "toggle-off"} 
          size={35} 
          color={color}
        />
      </Toggle>
    </Inline>
  )

  return (
    <Container>
      <Scroll>
        <Content>
          <Title>NOTIFICAÇÕES</Title>
          <Intern>
            
            {/* Botões de Notificações */}
            <NotificationButton 
              event="o Lab abrir"
              toggle={() => toggleNotification('Lab')}
              isOn={notifications['Lab']}
            />
            <NotificationButton 
              event="a Oficina abrir"
              toggle={() => toggleNotification('Workshop')}
              isOn={notifications['Workshop']}
            />
            <NotificationButton
              event="aparecer um novo Recado" 
              toggle={() => toggleNotification('Message')}
              isOn={notifications['Message']}
            />
            <NotificationButton
              event="uma requisição de compra for aceita" 
              toggle={() => toggleNotification('Requirement')}
              isOn={notifications['Requirement']}
            />
          </Intern>
        </Content>
        {/* Botão para retornar a pagina anterior */}
        <End>
          <Back/>
        </End>
      </Scroll>
    </Container>
  );
}

export default Notifications;