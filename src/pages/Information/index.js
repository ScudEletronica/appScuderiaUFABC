import React, { useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { Linking } from 'react-native';
import database from '@react-native-firebase/database';

import { 
  Intern, Title, Inline, Link, Logo, TextArea, LinkText, PasswordTitle, PasswordText
} from './styles';

import {
  Container, Scroll, Content, End
} from '~/styles/global'

// Imagens do Google Drive e Teams
import GDriveIcon from '~/assets/GDrive.png'
import TeamsIcon from '~/assets/Teams.png'

import Head from '~/components/Head';
import Back from '~/components/Back';

const reference = database().ref('Secrets');

// Informações Internas da equipe
const Information = ({ route }) => {
  const [instagram, setInstagram] = useState({
    password: '', user: ''
  })
  const [wifi, setWifi] = useState('')

  const [driveGeral, setDriveGeral] = useState('')
  const [driveField, setDriveField] = useState('')
  const [teamsGeral, setTeamsGeral] = useState('')
  const [teamsField, setTeamsField] = useState('')
  
  const { field } = route.params;

  // Carrega os valores da firebase
  useFocusEffect(() => {
    const onValueChange = reference.on('value', snapshot => {
      setInstagram(snapshot.child('Instagram').val())
      setWifi(snapshot.child('Wifi/password').val())
      setDriveGeral(snapshot.child('Drive/Geral').val())
      setDriveField(snapshot.child(`Drive/${field}`).val())
      setTeamsGeral(snapshot.child('Teams/Geral').val())
      setTeamsField(snapshot.child(`Teams/${field}`).val())
    })

    return () => reference.off('value', onValueChange)
  });

  // Modelo para botão de acesso a mídia
  const MediaLink = ({name, url, icon, geral}) => (
    <Link onPress={() => Linking.openURL(url)}>
      <Logo source={icon} />
      <TextArea>
        <LinkText>{name}</LinkText>
        <LinkText>
          {geral ? "Scuderia" : field}
        </LinkText>
      </TextArea>
    </Link>
  )

  return (
    <Container>
      <Head />
      <Scroll>
        <Content>
          <Intern>
            <Title>INFORMAÇÕES</Title>

            {/* Links para mídias internas da equipe */}
            <Inline>
              <MediaLink name="Drive" url={driveGeral} icon={GDriveIcon} geral/>
              <MediaLink name="Drive" url={driveField} icon={GDriveIcon} />
            </Inline>

            <Inline>
              <MediaLink name="Teams" url={teamsGeral} icon={TeamsIcon} geral/>
              <MediaLink name="Teams" url={teamsField} icon={TeamsIcon} />
            </Inline>

            {/* Senhas internas */} 
            <PasswordTitle>Senha do Wifi do Lab</PasswordTitle>
            <PasswordText>{wifi}</PasswordText>
            
            <PasswordTitle>Senha do Instagram Interno</PasswordTitle>
            <PasswordText>Usuário:  {instagram.user} </PasswordText>
            <PasswordText>Senha:  {instagram.password} </PasswordText>
          </Intern>
        </Content>
        <End>
          <Back />
        </End>
      </Scroll>
    </Container>
  );
}

export default Information;