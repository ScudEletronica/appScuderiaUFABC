import React, { useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import { 
  Title, Avatar, AvatarImage, Cam, Fundo, Fundo9, Fundo10, Name, NameText, RA, RAText
} from './styles';

import {
  Container, Content, End
} from '~/styles/global'

import Head from '~/components/Head';
import Back from '~/components/Back';

const Profile = () => {
  const [name, setName] = useState(' ');
  const [ra, setRA] = useState(0);
  const [picture, setPicture] = useState(' ');

  useFocusEffect(() => {
    setPicture('../../assets/Avatar.png');
    setName('Lorenzo Cyriacope Fragassi');
    setRA('11201811544');
  });

  return (
    <Container>
      <Head />
        <Content>
          <Title>PERFIL</Title>
          <Avatar>
            <AvatarImage resizeMode="contain" source={require('../../assets/Avatar.png')} />
            <Cam>
              <Icon name="camera-plus" size={40}/>
            </Cam>
          </Avatar>
        </Content>
        <Fundo>
          <Fundo10 source={require('../../assets/Fundo10.png')}>
            <Fundo9 source={require('../../assets/Fundo9.png')}>
              <Name>
                <NameText>{name}</NameText>
              </Name>

              <RA>
                <RAText>{ra}</RAText>
              </RA>

            </Fundo9>
          </Fundo10>
          
          <End>
            <Back />
          </End>
        </Fundo>
    </Container>
  );
}

export default Profile;