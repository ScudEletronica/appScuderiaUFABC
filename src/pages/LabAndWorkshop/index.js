import React from 'react';
import { View } from 'react-native';

import { 
  Container, Title, Place, Status, SubTitle, Open, Close, Buttons, Button, ButtonText, Notification, NotificationText, Information, InformationTitle, InformationContent, Keys, KeyTitle, Key
} from './styles';
import Head from '~/components/Head';
import Icon from 'react-native-vector-icons/FontAwesome5';



const LabAndWorkshop = () => {
  const LabOpen = true;
  const WorkshopOpen = false;

  return (
    <Container>
      <Head />
      <Title>Status Lab/Oficina</Title>
      <Place>
        <Status>
          <SubTitle>Laboratório</SubTitle>
          {LabOpen && <Open>Aberto</Open>}
          {!LabOpen && <Close>Fechado</Close>}
        </Status>
        <Buttons>
          <Button>
            <ButtonText>Pedir para</ButtonText>
            <ButtonText>abrir</ButtonText>
          </Button>
          <Notification>
            <NotificationText>Notificar quando o</NotificationText>
            <NotificationText>Lab abrir?</NotificationText>
          </Notification>
            <Icon name="toggle-off" size={35}/>
        </Buttons>
        <Information>
          <InformationTitle>Horas:</InformationTitle>
          <InformationContent>26h30min</InformationContent>
        </Information>
      </Place>
      <Place>
        <Status>
          <SubTitle>Oficina</SubTitle>
          {WorkshopOpen && <Open>Aberto</Open>}
          {!WorkshopOpen && <Close>Fechado</Close>}
        </Status>
        <Buttons>
          <Button>
            <ButtonText>Pedir para</ButtonText>
            <ButtonText>abrir</ButtonText>
          </Button>
          <Notification>
            <NotificationText>Notificar quando a</NotificationText>
            <NotificationText>Oficina abrir?</NotificationText>
          </Notification>
            <Icon name="toggle-off" size={35}/>
        </Buttons>
        <Information>
          <InformationTitle>Horas:</InformationTitle>
          <InformationContent>26h30min</InformationContent>
        </Information>
      </Place>
      <Keys>
        <KeyTitle>
          <Key source={require('../../assets/Key.png')}/>
          <SubTitle>Chaves</SubTitle>
        </KeyTitle>
        <Information>
          <InformationTitle>Oficina:</InformationTitle>
          <InformationContent>Segurança Bloco A</InformationContent>
        </Information>
        <Information>
          <InformationTitle>Lab Azul:</InformationTitle>
          <InformationContent>Segurança Bloco L</InformationContent>
        </Information>
        <Information>
          <InformationTitle>Lab Vermelha:</InformationTitle>
          <InformationContent>Oficina</InformationContent>
        </Information>
      </Keys>
    </Container>
  );
}

export default LabAndWorkshop;