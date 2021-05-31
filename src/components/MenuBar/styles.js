import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

// Todo o conteúdo do componente
export const Container = styled.View.attrs({
  shadowColor: "rgba(0, 0, 0, 0.2)",
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 1,
  shadowRadius: 5,
  elevation: 5,
})`
  position: absolute;
  z-index: 6;
  width: 217px;
  height: 100%;
  left: 0px;
  top: 0px;
  background: ${props => props.theme.colors.background};
  border: 2px solid ${props => props.theme.colors.background};
`;

// Cabeçalho do componente
export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 19px 17px;
`

// Botão para fechar o menu lateral
export const Less = styled(RectButton)`
`;

// Botão de configurações
export const Settings = styled(RectButton)`
`;

// Lista de opções
export const Options = styled.View`
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`

// Botão que navega para o perfil de usuário
export const Profile = styled(RectButton)`
  flex-direction: row;
  align-items: center;
  width: 200px;
  margin-bottom: 11px;
`

// Imagem de Perfil
export const ProfileImage = styled.Image``

// Nome de usuário
export const ProfileText = styled.Text`
  font-family: Roboto;
  font-weight: 500;
  font-size: 20px;
  line-height: 23px;
  margin-left: 20px;
  
  flex: 1;
  flex-wrap: wrap;
  align-items: flex-start;

  color: ${props => props.theme.colors.quaternaryText};
`

// Botão de navegação para as paginas
export const Option = styled(RectButton)`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin: 20px;
  width: 170px;
`

// Texto para o botão de navegação
export const OptionText = styled(ProfileText)`
  font-size: 18px;
  line-height: 21px;
  margin-left: 20px;
`