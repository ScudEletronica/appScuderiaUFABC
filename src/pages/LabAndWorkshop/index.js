import React, { useState, useContext } from 'react';
import { StyleSheet } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { ThemeContext } from 'styled-components';
import { Button } from "react-native-elements";
import database from '@react-native-firebase/database';

import { 
  Title, Intern, Place, Status, SubTitle, Open, Close, Buttons, ButtonAsk, ButtonCancel, TextButton, NotificationText, Toggle,Information, InformationTitle, InformationContent, Keys, KeyTitle, Key
} from './styles';

import { Container, Scroll, Content } from "~/styles/global";

import Icon from 'react-native-vector-icons/FontAwesome5';

import Head from '~/components/Head';
import Warning from '~/components/Warning';

const reference = database().ref();

const LabAndWorkshop = ({ route }) => {
  const [labIsOpen, setLabIsOpen] = useState(false);
  const [workshopIsOpen, setWorkshopIsOpen] = useState(false);
  const [notificationLabIsOn, setNotificationLabIsOn] = useState(false);
  const [notificationWorkshopIsOn, setNotificationWorkshopIsOn] = useState(false);
  const [totalHoursLab, setTotalHoursLab] = useState('');
  const [totalHoursWorkshop, setTotalHoursWorkshop] = useState('');
  const [keys, setKeys] = useState({
    workshop: '', labBlue: '', labRed: ''
  })
  const [visible, setVisible] = useState(false);
  const [asked, setAsked] = useState({
    lab: false, workshop: false
  });

  const { colors, images } = useContext(ThemeContext);
  const { user } = route.params

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
      backgroundColor: colors.primaryButton,
      borderRadius: 38,
      backgroundColor: '#EB5757',
    }
  })

  function hoursFormat(hours) {
    if (hours < 60) {
      return `${hours}min`
    } else if (hours%60 == 0){
      return `${hours/60}h`
    } else {
      return `${parseInt(hours/60)}h${hours%60}min`
    }
  }

  useFocusEffect(() => {
    const onChangeValue = reference.on('value', snapshot => {
      setLabIsOpen(snapshot.child('Status/Lab').val())
      setWorkshopIsOpen(snapshot.child('Status/Workshop').val())
      setTotalHoursLab(
        hoursFormat(
          snapshot.child(`Profile/${user}/labhours`).val()
        )
      );
      setTotalHoursWorkshop(
        hoursFormat(
          snapshot.child(`Profile/${user}/workshophours`).val()
        )
      );
      setKeys(snapshot.child('Keys').val());
    })

    return () => reference.off('value', onChangeValue)
  }, [reference])

  function toggleNotificationLab() {
    setNotificationLabIsOn(!notificationLabIsOn)
  }

  function toggleNotificationWorkShop() {
    setNotificationWorkshopIsOn(!notificationWorkshopIsOn)
  }

  function toggleOverlay() {
    setVisible(!visible);
  }

  function handleAsk() {
    toggleOverlay();

  }

  function handleAskIntern() {
    setAsked({lab: true, workshop: false});
    toggleOverlay();
  }

  function handleCancel(lab, workshop) {
    console.log('oi');
  }

  return (
    <Container>
      <Warning
        text="Um dos coordenadores será notificado sobre esse pedido. Tem certeza que quer continuar?"
        visible={visible}
        confirm={handleAskIntern}
        cancel={toggleOverlay}
      />
      <Head />
      <Scroll>
        <Content>
          <Title>Status Lab/Oficina</Title>

          <Intern>
            {/* Laboratório */}
            <Place>
              <Status>
                <SubTitle>Laboratório</SubTitle>
                { labIsOpen
                  ? <Open>Aberto</Open>
                  : <Close>Fechado</Close>
                } 
              </Status>

              <Buttons>
                {asked.lab
                ? <Button
                    title="Cancelar"
                    containerStyle={styles.button}
                    buttonStyle={styles.cancel}
                    onPress={
                      handleCancel(!asked.lab, asked.workshop)
                    }
                    disabled={labIsOpen}
                  />
                : <Button
                    title="Pedir para abrir"
                    containerStyle={styles.button}
                    buttonStyle={styles.ask}
                    onPress={handleAsk}
                    disabled={labIsOpen}
                  />
                }
                
                {/* <ButtonAsk 
                  onPress={toggleOverlay}
                  style={styles.button}
                >
                  <TextButton>Pedir para</TextButton>
                  <TextButton>abrir</TextButton>
                </ButtonAsk> */}
                <NotificationText>Notificar quando o Lab abrir?</NotificationText>
                <Toggle onPress={toggleNotificationLab}>
                  { notificationLabIsOn
                    ? <Icon name="toggle-on" size={35} color={color}/>
                    : <Icon name="toggle-off" size={35} color={color}/>
                  }
                </Toggle>
              </Buttons>

              <Information>
                <InformationTitle>Horas:</InformationTitle>
                <InformationContent>{totalHoursLab}</InformationContent>
              </Information>
            </Place>

            {/* Oficina */}
            <Place>
              <Status>
                <SubTitle>Oficina</SubTitle>
                { workshopIsOpen
                  ? <Open>Aberta</Open>
                  : <Close>Fechada</Close>
                } 
              </Status>

              <Buttons>
                <ButtonCancel>
                  <TextButton>Cancelar</TextButton>
                </ButtonCancel>
                <NotificationText>Notificar quando a Oficina abrir?</NotificationText>
                <Toggle onPress={toggleNotificationWorkShop}>
                  { notificationWorkshopIsOn
                    ? <Icon name="toggle-on" size={35} color={color}/>
                    : <Icon name="toggle-off" size={35} color={color}/>
                  }
                </Toggle>
              </Buttons>

              <Information>
                <InformationTitle>Horas:</InformationTitle>
                <InformationContent>{totalHoursWorkshop}</InformationContent>
              </Information>
            </Place>

            {/* Chaves */}
            <Keys>
              <KeyTitle>
                <Key source={images.key}/>
                <SubTitle>Chaves</SubTitle>
              </KeyTitle>

              <Information>
                <InformationTitle>Oficina:</InformationTitle>
                <InformationContent>{keys.workshop}</InformationContent>
              </Information>

              <Information>
                <InformationTitle>Lab Azul:</InformationTitle>
                <InformationContent>{keys.labBlue}</InformationContent>
              </Information>

              <Information>
                <InformationTitle>Lab Vermelha:</InformationTitle>
                <InformationContent>{keys.labRed}</InformationContent>
              </Information>
            </Keys>
          </Intern>
        </Content>
      </Scroll>
    </Container>
  );
}

export default LabAndWorkshop;