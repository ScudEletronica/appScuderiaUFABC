import React, { useState, useContext } from 'react';
import { StyleSheet } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { ThemeContext } from 'styled-components';
import { Button } from "react-native-elements";
import database from '@react-native-firebase/database';
import Icon from 'react-native-vector-icons/FontAwesome5';

import { 
  Title, Intern, Place, Status, SubTitle, Open, Close, Request, Buttons, NotificationText, Toggle,Information, InformationTitle, InformationContent, Keys, KeyTitle, Key
} from './styles';

import { Container, Scroll, Content } from "~/styles/global";

import Head from '~/components/Head';
import Warning from '~/components/Warning';

const reference = database().ref();

const LabAndWorkshop = ({ route }) => {
  const [status, setStatus] = useState({
    Lab: false, Workshop: false, labRequest: false, workshopRequest: false
  });
  const [notificationLabIsOn, setNotificationLabIsOn] = useState(false);
  const [notificationWorkshopIsOn, setNotificationWorkshopIsOn] = useState(false);
  const [totalHoursLab, setTotalHoursLab] = useState('');
  const [totalHoursWorkshop, setTotalHoursWorkshop] = useState('');
  const [coordinator, setCoordinator] = useState(false);
  const [keys, setKeys] = useState({
    workshop: '', labBlue: '', labRed: ''
  })
  const [visible, setVisible] = useState(false);
  const [askedLab, setAskedLab] = useState(false);
  const [askedWorkshop, setAskedWorkshop] = useState(false);
  const [place, setPlace] = useState('');
  const [confirm, setConfirm] = useState(false);
  const [overlayText, setOverlayText] = useState('');

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
      setStatus(snapshot.child('Status').val())
      setTotalHoursLab(
        hoursFormat(
          snapshot.child(`Profile/${user}/labhours`).val()
          )
          );
      setCoordinator(snapshot.child(`Profile/${user}/coordinator`).val())
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

  function handleAction(actualPlace, action) {
    setPlace(actualPlace);
    setConfirm(action);

    coordinator
    ? setOverlayText(`Tem certeza que quer continuar com essa ação?`)
    : action
      ? setOverlayText('Um dos coordenadores será notificado sobre esse pedido. Tem certeza que quer continuar?')
      : setOverlayText('Certeza que quer cancelar seu pedido?')
    toggleOverlay();
  }

  function handleConfirmOverlay() {
    coordinator
    ? confirm
      ? handleOpen()
      : handleClose()
    : confirm
      ? handleAsk()
      : handleCancelRequest()
  }

  function handleOpen() {
    if(place == 'Lab') {
      setAskedLab(true);
      reference
        .child('Status/')
        .update({Lab: true});
    } else {
      setAskedWorkshop(true);
      reference
        .child('Status')
        .update({Workshop: true});
    }
    toggleOverlay();
  }

  function handleAsk() {
    if(place == 'Lab') {
      setAskedLab(true);
      reference
        .child('Status/')
        .update({labRequest: true});
    } else {
      setAskedWorkshop(true);
      reference
        .child('Status')
        .update({workshopRequest: true});
    }
    toggleOverlay();
  }

  function handleClose() {
    if(place == 'Lab') {
      setAskedLab(false);
      reference
        .child('Status/')
        .update({Lab: false});
    } else {
      setAskedWorkshop(false);
      reference
        .child('Status')
        .update({Workshop: false});
    }
    toggleOverlay();
  }

  function handleCancelRequest() {
    if(place == 'Lab') {
      setAskedLab(false);
      reference
        .child('Status/')
        .update({labRequest: false});
    } else {
      setAskedWorkshop(false);
      reference
        .child('Status')
        .update({workshopRequest: false});
    }
    toggleOverlay();
  }

  return (
    <Container>
      <Warning
        text={overlayText}
        visible={visible}
        confirm={handleConfirmOverlay}
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
                { status.Lab
                  ? <Open>Aberto</Open>
                  : status.labRequest
                    ? <Request>Requisitado</Request>
                    : <Close>Fechado</Close>
                } 
              </Status>

              <Buttons>
                {coordinator
                ? askedLab || status.Lab
                  ? <Button
                      title="Fechar"
                      titleStyle={styles.text}
                      containerStyle={styles.button}
                      buttonStyle={styles.ask}
                      onPress={() => {
                        handleAction('Lab', false);
                      }}
                      />
                  : <Button
                      title="Abrir"
                      titleStyle={styles.text}
                      containerStyle={styles.button}
                      buttonStyle={styles.ask}
                      onPress={() => {
                        handleAction('Lab', true);
                      }}
                      disabled={status.Lab}
                    />
                : askedLab
                  ? <Button
                      title="Cancelar"
                      titleStyle={styles.text}
                      containerStyle={styles.button}
                      buttonStyle={styles.cancel}
                      onPress={() => {
                        handleAction('Lab', false);
                      }}
                      disabled={status.Lab}
                    />
                  : <Button
                      title="Pedir para abrir"
                      titleStyle={styles.text}
                      containerStyle={styles.button}
                      buttonStyle={styles.ask}
                      onPress={() => {
                        handleAction('Lab', true)
                      }}
                      disabled={status.Lab || status.labRequest}
                    />
                }
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
                { status.Workshop
                  ? <Open>Aberto</Open>
                  : status.workshopRequest
                    ? <Request>Requisitado</Request>
                    : <Close>Fechado</Close>
                } 
              </Status>

              <Buttons>
              {coordinator
                ? askedWorkshop || status.Workshop
                  ? <Button
                      title="Fechar"
                      titleStyle={styles.text}
                      containerStyle={styles.button}
                      buttonStyle={styles.ask}
                      onPress={() => {
                        handleAction('Workshop', false);
                      }}
                      />
                  : <Button
                      title="Abrir"
                      titleStyle={styles.text}
                      containerStyle={styles.button}
                      buttonStyle={styles.ask}
                      onPress={() => {
                        handleAction('Workshop', true);
                      }}
                      disabled={status.Workshop}
                    />
                : askedWorkshop
                  ? <Button
                      title="Cancelar"
                      titleStyle={styles.text}
                      containerStyle={styles.button}
                      buttonStyle={styles.cancel}
                      onPress={() => {
                        handleAction('Workshop', false);
                      }}
                      disabled={status.Workshop}
                    />
                  : <Button
                      title="Pedir para abrir"
                      titleStyle={styles.text}
                      containerStyle={styles.button}
                      buttonStyle={styles.ask}
                      onPress={() => {
                        handleAction('Workshop', true)
                      }}
                      disabled={status.Workshop || status.workshopRequest}
                    />
                }
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