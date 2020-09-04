import React, { useState } from 'react';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialIcons'
import Icon2 from 'react-native-vector-icons/Ionicons'
import Icon3 from 'react-native-vector-icons/Entypo'
import Icon4 from 'react-native-vector-icons/MaterialCommunityIcons'
import Icon5 from 'react-native-vector-icons/Fontisto'
import Icon6 from 'react-native-vector-icons/AntDesign'

import { 
  Container, Header, Less, Settings, Profile, ProfileImage, ProfileText, Options,  Option, OptionText
} from './styles';
import { useFocusEffect } from '@react-navigation/native';

const color = "#343434"

const MenuBar = (props) => {
  const [picture, setPicture] = useState('');
  const [name, setName] = useState('');

  useFocusEffect(() => {
    setPicture('../../../assets/Profile.png');
    setName('Lorenzo');
  })

  return (
    <Container>
      <DrawerContentScrollView>
        <Header>
          <Less onPress={props.navigation.closeDrawer}>
            <Icon name="more-vert" size={20} />
          </Less>
          <Settings onPress={() => props.navigation.navigate('Settings')}>
            <Icon2 name="settings-outline" size={20}/>
          </Settings>
        </Header>
        <Options>
          <Profile
            label={() =>
              <ProfileText>{name}</ProfileText>
            }
            icon={() =>
              <ProfileImage source={require('../../assets/Profile.png')}/>
            }
            onPress={() => props.navigation.navigate('Profile')}
          />
        
          <Option 
            label={() => 
              <OptionText>Home</OptionText>
            }
            icon={() => 
              <Icon name="home" size={29} color={color}/>
            }
            onPress={() => props.navigation.navigate('Main')}
          />
        
          <Option 
            label={() =>
              <OptionText>Sobre</OptionText>
            }
            icon={() => 
              <Icon3 name="info-with-circle" size={29} color={color}/>
            }
            onPress={() => props.navigation.navigate('About')}
          />
        
          <Option 
            label={() =>
              <OptionText>Recados</OptionText>
            }
            icon={() => 
              <Icon4 
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
              <Icon5 name="laboratory" size={29} color={color}/>
            }
            onPress={() => props.navigation.navigate('LabAndWorkshop')}
          />
        
          <Option 
            label={() =>
              <OptionText>Telemetria</OptionText>
            }
            icon={() => 
              <Icon6 name="dashboard" size={29} color={color}/>
            }
            onPress={() => props.navigation.navigate('Telemetry')}
          />
        
          <Option 
            label={() =>
              <OptionText>Requisição</OptionText>
            }
            icon={() => 
              <Icon name="shopping-cart" size={29} color={color}/>
            }
            onPress={() => props.navigation.navigate('MyRequirements')}
          />
        </Options>
      </DrawerContentScrollView>
    </Container>
  );
}

export default MenuBar;