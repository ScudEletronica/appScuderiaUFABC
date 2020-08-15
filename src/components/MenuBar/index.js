import React from 'react';

import { 
  Container, Header, Profile, ProfileImage, ProfileText, Options,  Option, OptionText 
} from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons'
import Icon2 from 'react-native-vector-icons/Ionicons'
import Icon3 from 'react-native-vector-icons/Entypo'
import Icon4 from 'react-native-vector-icons/MaterialCommunityIcons'
import Icon5 from 'react-native-vector-icons/Fontisto'
import Icon6 from 'react-native-vector-icons/AntDesign'

const MenuBar = () => {
  return (
    <Container>
      <Header>
        <Icon name="more-vert" size={20} />
        <Icon2 name="settings-outline" size={20}/>
      </Header>
      <Options>
        <Profile>
          <ProfileImage source={require('./../../assets/Profile.png')}/>
          <ProfileText>Lorenzo</ProfileText>
        </Profile>
      
        <Option>
          <Icon name="home" size={29} />
          <OptionText>Home</OptionText>
        </Option>
        <Option>
          <Icon3 name="info-with-circle" size={29} />
          <OptionText>Sobre</OptionText>
        </Option>
        <Option>
          <Icon4 name="newspaper-variant-outline" size={29} />
          <OptionText>Recados</OptionText>
        </Option>
        <Option>
          <Icon5 name="laboratory" size={29} />
          <OptionText>Lab/Oficina</OptionText>
        </Option>
        <Option>
          <Icon6 name="dashboard" size={29} />
          <OptionText>Telemetria</OptionText>
        </Option>
        <Option>
          <Icon name="shopping-cart" size={29} />
          <OptionText>Requisição</OptionText>
        </Option>
      </Options>
    </Container>
  );
}

export default MenuBar;