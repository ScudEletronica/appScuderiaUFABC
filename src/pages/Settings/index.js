import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ThemeContext } from 'styled-components';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Entypo from 'react-native-vector-icons/Entypo'

import { 
  Title, Modes, LightMode, LightModeText, DarkMode, DarkModeText,Options, Option, OptionTitle
} from './styles';

import { Container, Scroll, Content, End } from '~/styles/global';

import Back from '~/components/Back';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Configurações
const Settings = ({darkMode, lightMode, route}) => {
  const { navigate } = useNavigation();
  const { colors } = useContext(ThemeContext);
  const { coordinator } = route.params

  const color = colors.primaryIcon;
  
  // Executa o logout do usuário
  function handleLogout() {
    AsyncStorage.removeItem('user');
    AsyncStorage.removeItem('ra');
    navigate('Login')
  }
  
  // Modelo para Botão de opções
  const OptionButton = ({name, action, Icon, iconName}) => (
    <Option onPress={action}>
      <Icon name={iconName} size={40} color={color}/>
      <OptionTitle>{name}</OptionTitle>
    </Option>
  )

  return (
    <Container>
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
            
            <OptionButton
              name="Perfil"
              action={() => navigate("Profile")}
              Icon={Ionicons}
              iconName="ios-person-circle-outline"
            />
            <OptionButton
              name="Notificações"
              action={() => navigate("Notifications")}
              Icon={FontAwesome5}
              iconName="bell"
            />
            <OptionButton
              name="Informações"
              action={() => navigate("Information")}
              Icon={Entypo}
              iconName="info-with-circle"
            />
            {coordinator &&
              <OptionButton
                name="Novos Usuários"
                action={() => navigate("NewUsers")}
                Icon={Entypo}
                iconName="add-user"
              />
            }
            <OptionButton 
              name="Sair"
              action={handleLogout}
              Icon={Entypo}
              iconName="log-out" 
            />
          </Options>
        </Content>
        {/* Botão para retornar a pagina anterior */}
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