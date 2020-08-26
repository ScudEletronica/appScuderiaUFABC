import React from 'react';

import { 
  Title, Intern, Place, Status, SubTitle, Open, Close, Buttons, ButtonAsk, ButtonCancel, ButtonText, NotificationText, Information, InformationTitle, InformationContent, Keys, KeyTitle, Key
} from './styles';
import { Container, Scroll, Content } from "~/styles/global";

import Icon from 'react-native-vector-icons/FontAwesome5';

import Head from '~/components/Head';
import MenuBar from '~/components/MenuBar';
import AsktoOpen from '~/components/AsktoOpen';

const LabAndWorkshop = () => {
  const LabOpen = false;
  const WorkshopOpen = false;

  return (
    <Container>
      <AsktoOpen />
      <Head />
      <Scroll>
        <Content>
          <Title>Status Lab/Oficina</Title>

          <Intern>
            {/* Laboratório */}
            <Place>
              <Status>
                <SubTitle>Laboratório</SubTitle>
                {LabOpen && <Open>Aberto</Open>}
                {!LabOpen && <Close>Fechado</Close>}
              </Status>

              <Buttons>
                <ButtonAsk>
                  <ButtonText>Pedir para</ButtonText>
                  <ButtonText>abrir</ButtonText>
                </ButtonAsk>
                <NotificationText>Notificar quando o Lab abrir?</NotificationText>
                <Icon name="toggle-off" size={35}/>
              </Buttons>

              <Information>
                <InformationTitle>Horas:</InformationTitle>
                <InformationContent>26h30min</InformationContent>
              </Information>
            </Place>

            {/* Oficina */}
            <Place>
              <Status>
                <SubTitle>Oficina</SubTitle>
                {WorkshopOpen && <Open>Aberta</Open>}
                {!WorkshopOpen && <Close>Fechada</Close>}
              </Status>

              <Buttons>
                <ButtonCancel>
                  <ButtonText>Cancelar</ButtonText>
                </ButtonCancel>
                <NotificationText>Notificar quando a Oficina abrir?</NotificationText>
                <Icon name="toggle-on" size={35}/>
              </Buttons>

              <Information>
                <InformationTitle>Horas:</InformationTitle>
                <InformationContent>26h30min</InformationContent>
              </Information>
            </Place>

            {/* Chaves */}
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
          </Intern>
        </Content>
      </Scroll>
    </Container>
  );
}

export default LabAndWorkshop;