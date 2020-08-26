import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons'
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons'

import { 
  Title, Avatar, AvatarImage, Cam, Fundo, Fundo9, Fundo10, Name, NameText, RA, RAText
} from './styles';

import {
  Container, Scroll, Content, End, Back
} from '~/styles/global'

import Head from '~/components/Head';

const Profile = () => {
  return (
    <Container>
      <Head />
      <Scroll>
        <Content>
          <Title>PERFIL</Title>
          <Avatar>
            <AvatarImage source={require('../../assets/Avatar.png')} />
            <Cam>
              <Icon2 name="camera-plus" size={40}/>
            </Cam>
          </Avatar>
        </Content>
        <Fundo>
          <Name>
            <NameText>Lorenzo Cyriacope Fragassi</NameText>
          </Name>

          <RA>
            <RAText>11201811544</RAText>
          </RA>

          <Fundo9 source={require('../../assets/Fundo9.png')} />
          <Fundo10 source={require('../../assets/Fundo10.png')} />
          
          <End>
            <Back>
              <Icon name='md-chevron-back-circle' size={34}/>
            </Back>
          </End>
        </Fundo>
      </Scroll>
    </Container>
  );
}

export default Profile;