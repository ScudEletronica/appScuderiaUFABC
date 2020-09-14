import React, { useState, useContext } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { ThemeContext } from 'styled-components';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import database from '@react-native-firebase/database'

import { 
  Title, Avatar, AvatarImage, Cam, Fundo, Fundo9, Fundo10, Name, NameText, RA, RAText
} from './styles';

import {
  Container, Content, End
} from '~/styles/global'

import Head from '~/components/Head';
import Back from '~/components/Back';

const Profile = ({ route }) => {
  
  const [name, setName] = useState(' ');
  const [ra, setRA] = useState(0);
  const [picture, setPicture] = useState(' ');
  
  const { colors } = useContext(ThemeContext);
  const { user } = route.params

  const reference = database().ref(`Profile/${user}`);


  useFocusEffect(() => {
    reference.on("value", snapshot => {
      setName(snapshot.child('name').val());
      setRA(snapshot.child('ra').val());
      setPicture('../../assets/Avatar.png');
    })
  });

  return (
    <Container>
      <Head />
        <Content>
          <Title>PERFIL</Title>
          <Avatar>
            <AvatarImage resizeMode="contain" source={require('../../assets/Avatar.png')} />
            <Cam>
              <Icon 
                name="camera-plus" 
                size={40} 
                color={colors.primaryIcon}/>
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
            <Back different/>
          </End>
        </Fundo>
    </Container>
  );
}

export default Profile;