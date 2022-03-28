import React, { useContext, useEffect, useState } from 'react';
import { Button } from "react-native-elements";
import { useTheme } from 'styled-components';
import { StyleSheet } from 'react-native';
import { storeJSON } from '~/utils/store';
import Icon from 'react-native-vector-icons/FontAwesome5';

import { 
  Container, Status, Name, Open, Close, Request, Buttons, NotificationText, Toggle, Hour, HourTitle, HourContent
} from './styles';

import messaging from '@react-native-firebase/messaging'

// Informações da oficina ou laboratório
const Place = ({
  name, place, isOpen, request, asked, hours, coordinator, action
}) => {
  const [notification, setNotification] = useState(false); // Configuração da notificação de quando o local estiver aberto

  const { colors } = useTheme();
  const color = colors.primaryIcon;

  const styles = StyleSheet.create({
    button: {
      shadowColor: "rgba(0, 0, 0, 0.25)",
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 1,
      shadowRadius: 4,
      elevation: 4,
      marginTop: 7,
      marginRight: 18,
      marginLeft: 10,
      marginBottom: 7
    }, 
    buttonDimensions: {
      width: 110,
      height: 46,
      textAlign: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 38,
    },
    ask: {
      backgroundColor: colors.primaryButton,
    },
    cancel: {
      backgroundColor: '#EB5757',
    },
    text: {
      fontFamily: 'Roboto',
      fontWeight: 'bold',
      fontSize: 17,
      lineHeight: 20,

      color: colors.buttonText,
    }
  })

  // Carrega a configuração das notificações 
  useEffect(() => setNotification(global.notifications[place]))

  // Alterna a configuração das notificações
  function toggleNotification() {
    setNotification(!notification)

    global.notifications[place] = !global.notifications[place]

    storeJSON('notifications', global.notifications)
    notification
    ? messaging().unsubscribeFromTopic(place)
    : messaging().subscribeToTopic(place)
  }

  // Seleciona o botão a ser usado
  const buttonSelect = (name, color, option, disable) => (
    <Button
      title={name}
      titleStyle={styles.text}
      containerStyle={styles.button}
      buttonStyle={[color, styles.buttonDimensions]}
      onPress={() => { action(place, option) }}
      disabled={disable}
    />
  )

  return (
    <Container>
      <Status>
        <Name>{name}</Name>
        { isOpen
          ? <Open>Aberto</Open>
          : request
            ? <Request>Requisitado</Request>
            : <Close>Fechado</Close>
        } 
      </Status>

      <Buttons>
        {/* Botões de controle do Status da Oficina e Laboratório */}
        {coordinator
          ? asked || isOpen
            ? buttonSelect("Fechar", styles.ask, false, !isOpen)
            : buttonSelect("Abrir", styles.ask, true, isOpen)
          : asked
            ? buttonSelect("Cancelar", styles.cancel, false, isOpen)
            : buttonSelect("Pedir para abrir", styles.ask, true, isOpen || request)
        }

        {/* Escolhe se irá ou não receber notificações */}
        <NotificationText>Notificar quando {name} abrir?</NotificationText>
        <Toggle onPress={toggleNotification}>
          <Icon 
            name={notification ? "toggle-on" : "toggle-off"} 
            size={35} 
            color={color}
          />
        </Toggle>
      </Buttons>
      
      {/* Exibe as horas que o usuário passou no local */}
      {/* <Hour>
        <HourTitle>Horas:</HourTitle>
        <HourContent>{hours}</HourContent>
      </Hour> */}
    </Container>
  );
}

export default Place;