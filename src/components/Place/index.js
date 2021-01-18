import React, { useContext } from 'react';
import { Button } from "react-native-elements";
import { ThemeContext } from 'styled-components';
import { StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import { 
  Content, Status, SubTitle, Open, Close, Request, Buttons, NotificationText, Toggle, Information, InformationTitle, InformationContent
} from './styles';

const Place = ({
  name, place, isOpen, request, asked, hours, toggle, notification, coordinator, action
}) => {
  const { colors } = useContext(ThemeContext);
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
    ask: {
      width: 110,
      height: 46,
      textAlign: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: colors.primaryButton,
      borderRadius: 38,
    },
    cancel: {
      width: 110,
      height: 46,
      textAlign: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 38,
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

  return (
    <Content>
      <Status>
        <SubTitle>{name}</SubTitle>
        { isOpen
          ? <Open>Aberto</Open>
          : request
            ? <Request>Requisitado</Request>
            : <Close>Fechado</Close>
        } 
      </Status>

      <Buttons>
      {coordinator
        ? asked || isOpen
          ? <Button
              title="Fechar"
              titleStyle={styles.text}
              containerStyle={styles.button}
              buttonStyle={styles.ask}
              onPress={() => {
                action(place, false);
              }}
              />
          : <Button
              title="Abrir"
              titleStyle={styles.text}
              containerStyle={styles.button}
              buttonStyle={styles.ask}
              onPress={() => {
                action(place, true);
              }}
              disabled={isOpen}
            />
        : asked
          ? <Button
              title="Cancelar"
              titleStyle={styles.text}
              containerStyle={styles.button}
              buttonStyle={styles.cancel}
              onPress={() => {
                action(place, false);
              }}
              disabled={isOpen}
            />
          : <Button
              title="Pedir para abrir"
              titleStyle={styles.text}
              containerStyle={styles.button}
              buttonStyle={styles.ask}
              onPress={() => {
                action(place, true)
              }}
              disabled={isOpen || request}
            />
        }
        <NotificationText>Notificar quando {name} abrir?</NotificationText>
        <Toggle onPress={toggle}>
          { notification
            ? <Icon name="toggle-on" size={35} color={color}/>
            : <Icon name="toggle-off" size={35} color={color}/>
          }
        </Toggle>
      </Buttons>

      <Information>
        <InformationTitle>Horas:</InformationTitle>
        <InformationContent>{hours}</InformationContent>
      </Information>
    </Content>
  );
}

export default Place;