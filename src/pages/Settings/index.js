import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ThemeContext } from 'styled-components';
import Icon from 'react-native-vector-icons/FontAwesome5'
import Icon2 from 'react-native-vector-icons/Ionicons'
import Icon3 from 'react-native-vector-icons/Entypo'

import { 
  Title, Modes, LightMode, LightModeText, DarkMode, DarkModeText,Options, Option, OptionTitle
} from './styles';

import { Container, Scroll, Content, End } from '~/styles/global';

import Head from '~/components/Head';
import Back from '~/components/Back';

const Settings = ({ route }) => {
  const { navigate } = useNavigation();
  const { colors } = useContext(ThemeContext);

  const color = colors.primaryIcon;

  const { darkMode, lightMode } = route.params;
  
  function handleNavigateToProfile() {
    navigate('Profile');
  }
  
  function handleNavigateToNotifications() {
    navigate('Notifications');
  }
  
  function handleNavigateToInformation() {
    navigate('Information');
  }

  return (
    <Container>
      <Head />
      <Scroll>
        <Content>
          <Title>CONFIGURAÇÕES</Title>
          <Options> 
            <Modes>
              <LightMode 
                style={styles.button}
                onPress={lightMode}
              >
                <LightModeText>Light Mode</LightModeText>
              </LightMode>
              <DarkMode 
                style={styles.button}
                onPress={darkMode}
              >
                <DarkModeText>Dark Mode</DarkModeText>
              </DarkMode>
            </Modes>
            <Option onPress={handleNavigateToProfile}>
              <Icon2 
                name="ios-person-circle-outline" 
                size={40} 
                color={color}
              />
              <OptionTitle>Perfil</OptionTitle>
            </Option>
            <Option onPress={handleNavigateToNotifications}>
              <Icon 
                name="bell" 
                size={40} 
                color={color}
              />
              <OptionTitle>Notificações</OptionTitle>
            </Option>
            <Option onPress={handleNavigateToInformation}>
              <Icon3 
                name="info-with-circle" 
                size={40} 
                color={color}
              />
              <OptionTitle>Informações</OptionTitle>
            </Option>
          </Options>
        </Content>
        <End>
          <Back />
        </End>
      </Scroll>
    </Container>
  );
}

const styles = StyleSheet.create({
  button: {
    shadowColor: "rgba(0, 0, 0, 0.2)",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 2,
    shadowOpacity: 1,
    elevation: 2,
  }
})

export default Settings;