import React, { useCallback, useState } from 'react';
import { Linking } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import database from '@react-native-firebase/database';

import { 
  Scroll, Content, RM01, Text, SocialMedias, Title, Background1, Background2, Medias, Instagram,  Media, MediaText, WebSite, Lock, InstagramLock
} from './styles';

import { Container, End } from '~/styles/global'

import Back from '~/components/Back';

import Icon from 'react-native-vector-icons/AntDesign'

const reference = database().ref('Secrets');

// Sobre a Scuderia UFABC
const About = () => {
  const [instagram, setInstagram] = useState('')

  useFocusEffect(() => {
    const onValueChange = reference.on('value', snapshot => {
      setInstagram(snapshot.child('Instagram/source').val())
    })


    return () => reference.off('value', onValueChange)
  });

  // Seleciona o link para uma rede a social
  const handleLink = (media) => useCallback(async () => {
    var url;
    switch (media) {
      case 'Facebook':
        url='https://www.facebook.com/scuderia.ufabc'
        break;
      case 'Site':
        url='http://www.scuderiaufabc.com.br/'
        break;
      case 'Linkedin':
        url='https://www.linkedin.com/company/scuderia-ufabc/'
        break;
      case 'Instagram Externo':
        url='https://www.instagram.com/scuderiaufabc/?hl=pt-br'
        break;
      case 'Instagram Interno':
        url=instagram
        break;
    
      default:
        break;
    }

    Linking.openURL(url)
  })

  return (
    <Container>
      <Scroll>
        <Content>
          {/* Imagem do RM01 */}
          <RM01 source={require('../../assets/Rm01Desenho.png')} />
          {/* Descrição da equipe */}
          <Text>
            A Scuderia UFABC é a atual representante da Universidade Federal do ABC, na categoria Fórmula Combustão da SAE.
          </Text>
          <Text>
            A Equipe foi fundada em 2015, por alunos interessados em aprender fora da sala de aula, e aplicar a teoria na prática. Desde então, estamos no caminho para buscar a elite da categoria.
          </Text>
          <Background1 source={require('../../assets/Fundo3.png')}>
            <Background2 source={require('../../assets/Fundo4.png')}>
              {/* Redes sociais da equipe */}
              <SocialMedias>
                <Title>Redes Sociais</Title>
                <Medias>
                  <Media onPress={handleLink('Facebook')}>
                    <Icon name="facebook-square" size={50} color="#222"/>
                    <MediaText>Facebook</MediaText>
                  </Media>
                  <Media onPress={handleLink('Site')}>
                    <WebSite source={require('../../assets/WebSite.png')} />
                    <MediaText>Site</MediaText>
                  </Media>
                  <Media onPress={handleLink('Linkedin')}>
                    <Icon name="linkedin-square" size={50} color="#222"/>
                    <MediaText>Linkedin</MediaText>
                  </Media>
                </Medias>
                <Instagram>
                  <Media onPress={handleLink('Instagram Externo')}>
                    <Icon name="instagram" size={50} color="#222"/>
                    <MediaText>Instagram</MediaText>
                    <MediaText>Externo</MediaText>
                  </Media>
                  <Media onPress={handleLink('Instagram Interno')}>
                    <InstagramLock>
                      <Icon name="instagram" size={50} color="#222"/>
                      <Lock source={require('../../assets/Lock.png')} />
                    </InstagramLock>
                    <MediaText>Instagram</MediaText>
                    <MediaText>Interno</MediaText>
                  </Media>
                </Instagram>
                
                {/* Botão para retornar a pagina anterior */}
                <End>
                  <Back different/>
                </End>
              </SocialMedias>
            </Background2>
          </Background1>
          
        </Content>
      </Scroll>
    </Container>
  );
}

export default About;
