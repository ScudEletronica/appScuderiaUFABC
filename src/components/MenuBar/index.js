import { useFocusEffect } from '@react-navigation/native';
import React, { useState, useContext } from 'react';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import { ThemeContext } from 'styled-components';
import database from '@react-native-firebase/database'

import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Entypo from 'react-native-vector-icons/Entypo'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Fontisto from 'react-native-vector-icons/Fontisto'
import AntDesign from 'react-native-vector-icons/AntDesign'

import { 
  Container, Header, Less, Settings, Profile, ProfileImage, ProfileText, Options,  Option, OptionText
} from './styles';

// Menu Lateral
const MenuBar = ({props, user}) => {  
  const [picture, setPicture] = useState('');
  
  const { colors } = useContext(ThemeContext);
  
  const color = colors.secondaryIcon

  // useFocusEffect(() => {
  //   setPicture('../../../assets/Profile.png');
  // })

  // Modelo para botão de navegação para um local
  function OptionButton({name, route, Icon, iconName}) {
    return (
      <Option
        onPress={() => props.navigation.navigate(route)}
      >
        <Icon name={iconName} size={29} color={color}/>
        <OptionText>{name}</OptionText>
      </Option>
    )
  }

  return (
    <Container>
      <DrawerContentScrollView>
        {/* Cabeçalho */}
        <Header>
          <Less onPress={props.navigation.closeDrawer}>
            <MaterialIcons name="more-vert" size={20} color={color}/>
          </Less>
          <Settings onPress={() => props.navigation.navigate('Settings')}>
            <Ionicons name="settings-outline" size={20} color={color}/>
          </Settings>
        </Header>

        {/* Botões de navegação */}
        <Options>
          {/* Perfil do usuário */}
          <Profile
            onPress={() => props.navigation.navigate('Profile')}
          >
            <Ionicons 
              name="person-circle-outline" 
              size={65} 
              color={color}
            />
            <ProfileText>{user}</ProfileText>
          </Profile>
        
          <OptionButton 
            name="Home" 
            route='Main' 
            Icon={MaterialIcons} 
            iconName="home" 
          />

          <OptionButton 
            name="Sobre" 
            route='About' 
            Icon={Entypo} 
            iconName="info-with-circle" 
          />

          <OptionButton 
            name="Recados" 
            route='Messages' 
            Icon={MaterialCommunityIcons} 
            iconName="newspaper-variant-outline" 
          />
          
          <OptionButton 
            name="Lab/Oficina" 
            route='LabAndWorkshop' 
            Icon={Fontisto} 
            iconName="laboratory" 
          />
          
          <OptionButton 
            name="Telemetria" 
            route='Telemetry' 
            Icon={AntDesign} 
            iconName="dashboard" 
          />

          <OptionButton 
            name="Requisição" 
            route='MyRequirements' 
            Icon={MaterialIcons} 
            iconName="shopping-cart" 
          />
        </Options>
      </DrawerContentScrollView>
    </Container>
  );
}

export default MenuBar;