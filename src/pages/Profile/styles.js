import styled from 'styled-components/native';
import { height } from '~/utils/dimensions';
import { GreenTitle, Content } from '~/styles/global';

// Titulo da Pagina
export const Title = styled(GreenTitle)`
  font-size: 30px;
  line-height: 35px;

  margin: 30px 0 22px;
`;

// Área de com a imagem de perfil e botões para edição
export const AvatarSpace = styled(Content)`
  margin-bottom: 250px;
`;

// Imagem de Perfil
export const Avatar = styled.View`
`;

// Imagem de Perfil
export const AvatarImage = styled.Image`
`;

// Ícone de camera 
export const Cam = styled.View`
  align-self: flex-end;
  bottom: 25px;
`;

// Imagens de Fundo
export const Background = styled.View`
  justify-content: flex-end;
`;


// Imagem de fundo maior
export const Background1 = styled.ImageBackground`
  position: absolute;
  width: 100%;
  height: ${height(266)}px;
  bottom: 0;
`

// Imagem de fundo menor
export const Background2 = styled.ImageBackground`
  position: absolute;
  width: 100%;
  height: ${height(208)}px;
  bottom: 72px;
`

// Área que contem o nome do usuário
export const Name = styled.View.attrs({
  shadowColor: "rgba(0, 0, 0, 0.25)",
  shadowOffset: { width: 0, height: 4 },
  shadowRadius: 4,
  shadowOpacity: 1,
  elevation: 4,
})`
  align-self: center;
  width: 273px;
  top: 20px;
  background: ${props => props.theme.colors.background};
  border-radius: 40px;
  padding: 10px 26px;
  margin: 50px 0 25px;
`;

// Nome do usuário
export const NameText = styled.Text`
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 23px;
  text-align: center;

  color: ${props => props.theme.colors.primaryText};
`;

// Área que contem o RA do usuário
export const RA = styled(Name)`
  border-radius: 80px;
  margin-top: 0;
`;

// RA do usuário
export const RAText = styled(NameText)`
  font-weight: 500;
`;