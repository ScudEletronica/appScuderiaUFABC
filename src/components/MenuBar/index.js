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
import { useFocusEffect } from '@react-navigation/native';


const MenuBar = ({props, user }) => {
  
  const [picture, setPicture] = useState('');
  const [name, setName] = useState('');
  
  const { colors } = useContext(ThemeContext);
  
  const reference = database().ref(`Profile/${user}`)
  const color = colors.secondaryIcon

  useFocusEffect(() => {
    reference.on('value', snapshot => {
      setName(snapshot.child('user').val());
    })
    setPicture('../../../assets/Profile.png');
  })

  return (
    <Container>
      <DrawerContentScrollView>
        <Header>
          <Less onPress={props.navigation.closeDrawer}>
            <MaterialIcons name="more-vert" size={20} color={color}/>
          </Less>
          <Settings onPress={() => props.navigation.navigate('Settings')}>
            <Ionicons name="settings-outline" size={20} color={color}/>
          </Settings>
        </Header>
        <Options>
          <Profile
            label={() =>
              <ProfileText>{name}</ProfileText>
            }
            icon={() =>
              // <ProfileImage source={require('../../assets/Profile.png')}/>
              <Ionicons name="person-circle-outline" size={65} />
            }
            onPress={() => props.navigation.navigate('Profile')}
          />
        
          <Option 
            label={() => 
              <OptionText>Home</OptionText>
            }
            icon={() => 
              <MaterialIcons name="home" size={29} color={color}/>
            }
            onPress={() => props.navigation.navigate('Main')}
          />
        
          <Option 
            label={() =>
              <OptionText>Sobre</OptionText>
            }
            icon={() => 
              <Entypo name="info-with-circle" size={29} color={color}/>
            }
            onPress={() => props.navigation.navigate('About')}
          />
        
          <Option 
            label={() =>
              <OptionText>Recados</OptionText>
            }
            icon={() => 
              <MaterialCommunityIcons 
                name="newspaper-variant-outline" 
                size={29} 
                color={color}
              />
            }
            onPress={() => props.navigation.navigate('Messages')}
          />
        
          <Option 
            label={() =>
              <OptionText>Lab/Oficina</OptionText>
            }
            icon={() => 
              <Fontisto name="laboratory" size={29} color={color}/>
            }
            onPress={() => props.navigation.navigate('LabAndWorkshop')}
          />
        
          <Option 
            label={() =>
              <OptionText>Telemetria</OptionText>
            }
            icon={() => 
              <AntDesign name="dashboard" size={29} color={color}/>
            }
            onPress={() => props.navigation.navigate('Telemetry')}
          />
        
          <Option 
            label={() =>
              <OptionText>Requisição</OptionText>
            }
            icon={() => 
              <MaterialIcons name="shopping-cart" size={29} color={color}/>
            }
            onPress={() => props.navigation.navigate('MyRequirements')}
          />
        </Options>
      </DrawerContentScrollView>
    </Container>
  );
}

export default MenuBar;