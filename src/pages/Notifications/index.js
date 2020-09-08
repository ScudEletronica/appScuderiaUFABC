import React, { useState, useContext } from 'react';
import { ThemeContext } from 'styled-components';
import Icon from 'react-native-vector-icons/FontAwesome5';

import { 
  Title, Intern, Inline, InlineText, Toggle
} from './styles';

import {
  Container, Scroll, Content, End
} from '~/styles/global'

import Head from '~/components/Head';
import Back from '~/components/Back';

const Notifications = () => {
  const [notificationLabIsOn, setNotificationLabIsOn] = useState(false);
  const [notificationWorkshopIsOn, setNotificationWorkshopIsOn] = useState(true);
  const [notificationNewMessage, setNotificationNewMessage] = useState(false);
  const [notificationAcceptRequirement, setNotificationAcceptRequirement] = useState(true);

  const { colors } = useContext(ThemeContext);

  const color = colors.primaryIcon;

  function toggleNotificationLab() {
    setNotificationLabIsOn(!notificationLabIsOn)
  }

  function toggleNotificationWorkShop() {
    setNotificationWorkshopIsOn(!notificationWorkshopIsOn)
  }

  function toggleNotificationMessage() {
    setNotificationNewMessage(!notificationNewMessage)
  }

  function toggleNotificationRequirement() {
    setNotificationAcceptRequirement(!notificationAcceptRequirement)
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