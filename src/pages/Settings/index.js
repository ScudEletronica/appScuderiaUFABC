import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5'
import Icon2 from 'react-native-vector-icons/Ionicons'
import Icon3 from 'react-native-vector-icons/Entypo'

import { 
  Title, Modes, LightMode, LightModeText, DarkMode, DarkModeText,Options, Option, OptionTitle
} from './styles';
import { Container, Scroll, Content, End, Back } from '~/styles/global';

import Head from '~/components/Head';

const Settings = () => {
  return (
    <Container>
      <Head />
      <Scroll>
        <Content>
          <Title>CONFIGURAÇÕES</Title>
          <Options>
            <Modes>
              <LightMode>
                <LightModeText>Light Mode</LightModeText>
              </LightMode>
              <DarkMode>
                <DarkModeText>Dark Mode</DarkModeText>
              </DarkMode>
            </Modes>
            <Option>
              <Icon2 name="ios-person-circle-outline" size={40} />
              <OptionTitle>Perfil</OptionTitle>
            </Option>
            <Option>
              <Icon name="bell" size={40} />
              <OptionTitle>Notificações</OptionTitle>
            </Option>
            <Option>
              <Icon3 name="info-with-circle" size={40} />
              <OptionTitle>Informações</OptionTitle>
            </Option>
          </Options>
        </Content>
        <End>
          <Back>
            <Icon2 name="md-chevron-back-circle" size={34}/>
          </Back>
        </End>
      </Scroll>
    </Container>
  );
}

export default Settings;