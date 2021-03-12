import React, { useState, useContext, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { ThemeContext } from 'styled-components';
import { storeJSON } from '~/utils/store';
import database from '@react-native-firebase/database';
import messaging from '@react-native-firebase/messaging';

import { 
  Title, Intern, SubTitle, Information, InformationTitle, InformationContent, Keys, KeyTitle, Key, InputKey, Create, CreateText
} from './styles';

import { Container, Scroll, Content } from "~/styles/global";

import Head from '~/components/Head';
import Warning from '~/components/Warning';
import Place from '~/components/Place';

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
  const [keyWorkshop, setKeyWorkshop] = useState('');
  const [keyLabBlue, setKeyLabBlue] = useState('');
  const [keyLabRed, setKeyLabRed] = useState('');
  const [visible, setVisible] = useState(false);
  const [askedLab, setAskedLab] = useState(false);
  const [askedWorkshop, setAskedWorkshop] = useState(false);
  const [place, setPlace] = useState('');
  const [confirm, setConfirm] = useState(false);
  const [overlayText, setOverlayText] = useState('');

  const { colors, images } = useContext(ThemeContext);
  const { user } = route.params

  const color = colors.primaryIcon;

  useFocusEffect(() => {
    setNotificationLabIsOn(global.notifications.labOpen)
    setNotificationWorkshopIsOn(global.notifications.workshopOpen)
  })

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
    })

    return () => reference.off('value', onChangeValue)
  }, [user])

  useEffect(() => {
    const onChangeValue = reference.on('value', snapshot => {
      setKeyWorkshop(snapshot.child('Keys/workshop').val())
      setKeyLabBlue(snapshot.child('Keys/labBlue').val())
      setKeyLabRed(snapshot.child('Keys/labRed').val())
    })

    return () => reference.off('value', onChangeValue)
  }, [user])

  useFocusEffect(() => {
    if (status.Lab == true) {
      setAskedLab(false)
    }
    
    if (status.Workshop == true) {
      setAskedWorkshop(false)
    }
  }, [status])

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
        .update({Lab: true, labRequest: false});
    } else {
      setAskedWorkshop(true);
      reference
        .child('Status')
        .update({Workshop: true, workshopRequest: false});
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

  function handleKey () {
    reference.child("Keys").update({
      labBlue: keyLabBlue,
      labRed: keyLabRed,
      workshop: keyWorkshop
    });
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
            <Place 
              name="Laboratório"
              place="Lab"
              isOpen={status.Lab}
              request={status.labRequest}
              asked={askedLab}
              hours={totalHoursLab}
              toggle={toggleNotificationLab}
              notification={notificationLabIsOn}
              coordinator={coordinator}
              action={handleAction}
            />

            {/* Oficina */}
            <Place 
              name="Oficina"
              place="Workshop"
              isOpen={status.Workshop}
              request={status.workshopRequest}
              asked={askedWorkshop}
              hours={totalHoursWorkshop}
              toggle={toggleNotificationWorkShop}
              notification={notificationWorkshopIsOn}
              coordinator={coordinator}
              action={handleAction}
            />

            {/* Chaves */}
            <Keys>
              <KeyTitle>
                <Key source={images.key}/>
                <SubTitle>Chaves</SubTitle>
              </KeyTitle>
              <Information>
                <InformationTitle>Oficina:</InformationTitle>
                {coordinator
                  ? <InputKey 
                      value={keyWorkshop}
                      onChangeText={text => 
                        setKeyWorkshop(text)}
                    />
                  : <InformationContent>{keyWorkshop}</InformationContent>
                }
              </Information>

              <Information>
                <InformationTitle>Lab Azul:</InformationTitle>
                {coordinator
                  ? <InputKey 
                      value={keyLabBlue}
                      onChangeText={text => 
                        setKeyLabBlue(text)}
                    />
                  : <InformationContent>{keyLabBlue}</InformationContent>
                }
              </Information>

              <Information>
                <InformationTitle>Lab Vermelha:</InformationTitle>
                {coordinator
                  ? <InputKey 
                      value={keyLabRed}
                      onChangeText={text => 
                      setKeyLabRed(text)}
                  />
                  : <InformationContent>{keyLabRed}</InformationContent>
                }
              </Information>
              {coordinator &&
                <Create 
                  style={styles.button}
                  onPress={handleKey}
                >
                  <CreateText>Atualizar Chaves</CreateText>
                </Create>
              }
            </Keys>
          </Intern>
        </Content>
      </Scroll>
    </Container>
  );
}

export default LabAndWorkshop;