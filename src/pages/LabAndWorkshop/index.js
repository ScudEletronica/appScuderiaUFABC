import React, { useState, useContext } from 'react';
import { StyleSheet } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { ThemeContext } from 'styled-components';

import { 
  Title, Intern, Place, Status, SubTitle, Open, Close, Buttons, ButtonAsk, ButtonCancel, TextButton, NotificationText, Toggle,Information, InformationTitle, InformationContent, Keys, KeyTitle, Key
} from './styles';

import { Container, Scroll, Content } from "~/styles/global";

import Icon from 'react-native-vector-icons/FontAwesome5';

import Head from '~/components/Head';
import AsktoOpen from '~/components/AsktoOpen';

const LabAndWorkshop = () => {
  const [labIsOpen, setLabIsOpen] = useState(true);
  const [workshopIsOpen, setWorkshopIsOpen] = useState(false);
  const [notificationLabIsOn, setNotificationLabIsOn] = useState(false);
  const [notificationWorkshopIsOn, setNotificationWorkshopIsOn] = useState(true);
  const [totalHoursLab, setTotalHoursLab] = useState('');
  const [totalHoursWorkshop, setTotalHoursWorkshop] = useState('');
  const [workshopKey, setWorkshopKey] = useState('');
  const [labBlueKey, setLabBlueKey] = useState('');
  const [labRedKey, setLabRedKey] = useState('');

  const { colors, images } = useContext(ThemeContext);

  const color = colors.primaryIcon;

  useFocusEffect(() => {
    setTotalHoursLab('1h50min');
    setTotalHoursWorkshop('2h30min');
    setWorkshopKey('Segurança Bloco A');
    setLabBlueKey('Segurança Bloco L');
    setLabRedKey('Oficina');
  })

  function toggleNotificationLab() {
    setNotificationLabIsOn(!notificationLabIsOn)
  }

  function toggleNotificationWorkShop() {
    setNotificationWorkshopIsOn(!notificationWorkshopIsOn)
  }

  return (
    <Container>
      <Head />
      {/* <AsktoOpen /> */}
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
                <ButtonAsk style={styles.button}>
                  <TextButton>Pedir para</TextButton>
                  <TextButton>abrir</TextButton>
                </ButtonAsk>
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
                <InformationContent>{workshopKey}</InformationContent>
              </Information>

              <Information>
                <InformationTitle>Lab Azul:</InformationTitle>
                <InformationContent>{labBlueKey}</InformationContent>
              </Information>

              <Information>
                <InformationTitle>Lab Vermelha:</InformationTitle>
                <InformationContent>{labRedKey}</InformationContent>
              </Information>
            </Keys>
          </Intern>
        </Content>
      </Scroll>
    </Container>
  );
}

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
  }
})

export default LabAndWorkshop;