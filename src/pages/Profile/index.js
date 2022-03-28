import React, { useState, useContext } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { useTheme } from 'styled-components';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Icon2 from 'react-native-vector-icons/Ionicons'
import database from '@react-native-firebase/database'

import { 
  Title, Avatar, AvatarImage, Cam, Background, Background2, Background1, Name, NameText, RA, RAText, AvatarSpace
} from './styles';

import {
  Container, End, Scroll
} from '~/styles/global'

import Back from '~/components/Back';
import { useUser } from '~/contexts/AuthContext';

// Informações de Perfil
const Profile = () => {
  // const [picture, setPicture] = useState(' '); // Foto de perfil
  
  const { colors } = useTheme();
  const { user, name, ra } = useUser()

  const reference = database().ref(`Profile/${user}`);

  // useFocusEffect(() => {
  //   reference.on("value", snapshot => {
  //     setPicture('../../assets/Avatar.png');
  //   })
  // });

  return (
    <Container>
      <Scroll>
        <AvatarSpace>
          <Title>PERFIL</Title>
          <Avatar>
            {/* <AvatarImage resizeMode="contain" source={require('../../assets/Avatar.png')} /> */}
            <Icon2 
              name="person-circle-outline" 
              size={212} 
              color={colors.primaryIcon}
            />
            {/* <Cam>
              <Icon 
                name="camera-plus" 
                size={40} 
                color={colors.primaryIcon}/>
            </Cam> */}
          </Avatar>
        </AvatarSpace>
        <Background>
          <Background1 source={require('../../assets/Fundo10.png')}>
            <Background2 source={require('../../assets/Fundo9.png')}>
              {/* Informações de perfil */}
              <Name>
                <NameText>{name}</NameText>
              </Name>

              <RA>
                <RAText>{ra}</RAText>
              </RA>

            </Background2>
          </Background1>
          
          {/* Fim da página */}
          <End>
            <Back different/>
          </End>
        </Background>
      </Scroll>
    </Container>
  );
}

export default Profile;