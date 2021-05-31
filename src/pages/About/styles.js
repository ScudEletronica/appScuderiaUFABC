import styled from 'styled-components/native';
import { height } from "~/utils/dimensions"
import { RectButton } from 'react-native-gesture-handler';

// Define a rolagem na página
export const Scroll = styled.ScrollView`
  width: 100%;
  height: 829px;
`;

// Define o conteúdo interno da pagina
export const Content = styled.View`
  width: 100%;
  height: 829px;
  align-items: center;
  background: ${props => props.theme.colors.background};
`;

// Imagem do RM01
export const RM01 = styled.Image`
  width: 292px;
  height: 195px;
`;

// Texto de apresentação da equipe
export const Text = styled.Text`
  font-family: Roboto;
  font-size: 16px;
  line-height: 20px;
  text-align: justify;

  margin: 10px 30px 10px 20px;

  color: ${props => props.theme.colors.primaryText};
`;

// Mídias sociais
export const SocialMedias = styled.View`
  align-items: center;
`;

// Titulo da página
export const Title = styled.Text`
  font-family: Roboto;
  font-weight: bold;
  font-size: 30px;
  line-height: 35px;
  text-align: center;

  margin-bottom: 27px;
  margin-top: 50px;

  color: #222;
`;

// Imagem de fundo maior
export const Background1 = styled.ImageBackground`
  position: absolute;
  width: 100%;
  height: ${height(382.28)}px;
  left: 0px;
  bottom: 0px;
`;

// Imagem de fundo menor
export const Background2 = styled.ImageBackground`
  position: absolute;
  width: 100%;
  height: ${height(208)}px;
  left: 0px;
  bottom: 193px;
`;

// Lista de mídias sociais da equipe
export const Medias = styled.View`
  flex-direction: row;
  margin-bottom: 30px;
`;

// Lista de contas do Instagram
export const Instagram = styled.View`
  flex-direction: row;
`;

// Botão para acessar a mídia social
export const Media = styled(RectButton)`
  align-items: center;
  justify-content: center;
  margin-right: 18px;
  margin-left: 18px;
`;

// Texto contendo o nome da mídia social
export const MediaText = styled.Text`
  margin-top: 10px;
  font-family: Roboto;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;

  color: #222;
`;

// Imagem que representa um website
export const WebSite = styled.Image`
  width: 50px;
  height: 50px;
`;

// Logo de instagram com cadeado
export const InstagramLock = styled.View`
`

// Imagem de cadeado
export const Lock = styled.Image`
  position: absolute;
  right: 0;
  bottom: 0;
  width: 15.76px;
  height: 25.96px;
  z-index: 2;
`;