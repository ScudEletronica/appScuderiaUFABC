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

import Head from '~/components/Head';
import Back from '~/components/Back';
import messaging from '@react-native-firebase/messaging';

const Notifications = ({ route }) => {
  const [notificationLabIsOn, setNotificationLabIsOn] = useState(false);
  const [notificationWorkshopIsOn, setNotificationWorkshopIsOn] = useState(false);
  const [notificationNewMessage, setNotificationNewMessage] = useState(false);
  const [notificationAcceptRequirement, setNotificationAcceptRequirement] = useState(false);

  const { colors } = useContext(ThemeContext);

  const color = colors.primaryIcon;
  useFocusEffect(() => {
    setNotificationLabIsOn(global.notifications.labOpen)
    setNotificationWorkshopIsOn(global.notifications.workshopOpen)
    setNotificationNewMessage(global.notifications.messages)
    setNotificationAcceptRequirement(global.notifications.requirements)
  })

  function toggleNotificationLab() {
    setNotificationLabIsOn(!notificationLabIsOn)
    global.notifications.labOpen = !global.notifications.labOpen
    storeJSON('notifications', global.notifications)
    notificationLabIsOn
    ? messaging().unsubscribeFromTopic("Lab")
    : messaging().subscribeToTopic("Lab")
  }
  
  function toggleNotificationWorkShop() {
    setNotificationWorkshopIsOn(!notificationWorkshopIsOn)
    global.notifications.workshopOpen = !global.notifications.workshopOpen
    storeJSON('notifications', global.notifications)
    notificationWorkshopIsOn
    ? messaging().unsubscribeFromTopic("Workshop")
    : messaging().subscribeToTopic("Workshop")
  }

  function toggleNotificationMessage() {
    setNotificationNewMessage(!notificationNewMessage)
    global.notifications.messages = !global.notifications.messages
    storeJSON('notifications', global.notifications)
    notificationNewMessage
    ? messaging().unsubscribeFromTopic("Message")
    : messaging().subscribeToTopic("Message")
  }

  function toggleNotificationRequirement() {
    setNotificationAcceptRequirement(!notificationAcceptRequirement)
    global.notifications.requirements = !global.notifications.requirements
    storeJSON('notifications', global.notifications)
    notificationAcceptRequirement
    ? messaging().unsubscribeFromTopic("Requirement")
    : messaging().subscribeToTopic("Requirement")
  }

  return (
    <Container>
      <Head />
      <Scroll>
        <Content>
          <Title>NOTIFICAÇÕES</Title>
          <Intern>
            
            <Inline>
              <InlineText>Notificar quando o Lab abrir?</InlineText>
              <Toggle onPress={toggleNotificationLab}>
                { notificationLabIsOn
                  ? <Icon 
                      name="toggle-on" 
                      size={35} 
                      color={color}
                    />
                  : <Icon 
                      name="toggle-off" 
                      size={35} 
                      color={color}
                    />
                }
              </Toggle>
            </Inline>

            <Inline>
              <InlineText>Notificar quando a Oficina abrir?</InlineText>
              <Toggle onPress={toggleNotificationWorkShop}>
                { notificationWorkshopIsOn
                  ? <Icon 
                      name="toggle-on" 
                      size={35} 
                      color={color}
                    />
                  : <Icon 
                      name="toggle-off" 
                      size={35} 
                      color={color}
                    />
                }
              </Toggle>
            </Inline>

            <Inline>
              <InlineText>Notificar quando aparecer um novo Recado?</InlineText>
              <Toggle onPress={toggleNotificationMessage}>
                { notificationNewMessage
                  ? <Icon 
                      name="toggle-on" 
                      size={35} 
                      color={color}
                    />
                  : <Icon 
                      name="toggle-off" 
                      size={35} 
                      color={color}
                    />
                }
              </Toggle>
            </Inline>

            <Inline>
              <InlineText>Notificar quando uma requisição de compra for aceita?</InlineText>
              <Toggle onPress={toggleNotificationRequirement}>
                { notificationAcceptRequirement
                  ? <Icon 
                      name="toggle-on" 
                      size={35} 
                      color={color}
                    />
                  : <Icon 
                      name="toggle-off" 
                      size={35} 
                      color={color}
                    />
                }
              </Toggle>
            </Inline>
          </Intern>
        </Content>
        <End>
          <Back/>
        </End>
      </Scroll>
    </Container>
  );
}

export default Notifications;