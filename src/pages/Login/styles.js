import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import { height } from '~/utils/dimensions';
import { RectButton } from 'react-native-gesture-handler';

// Todo o conteúdo da pagina
export const Container = styled.View`
  flex: 1;
  background: ${props => props.theme.colors.background};
  align-items: center;
`;

// Imagens de Fundo
export const Background = styled.View`
  flex-direction: row;
`

// Logo da Scuderia
export const Logo = styled.Image`
  position: absolute;
  width: ${Dimensions.get('window').width - 10}px;
  height: ${height(160)}px;
  left: 10px;
  top: 12px;
`

// Imagem de fundo maior
export const Background1 = styled.Image`
  position: absolute;
  width: 100%;
  height: ${height(217)}px;
`

// Imagem de fundo menor
export const Background2 = styled.Image`
  width: 100%;
  height: ${height(208)}px;
  top: 21px;
  margin-bottom: 31px;
`

// Formulário para fazer Login
export const Form = styled.View`
  justify-content: space-between;
  align-items: center;
  background-color: rgba(0, 0, 0, 0);
`

// Titulo da Pagina
export const Title = styled.Text`
  width: 290px;
  height: 39px;

  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 40px;
  line-height: 47px;
  text-align: center;

  margin-bottom: 10px;

  color: ${props => props.theme.colors.tertiaryText};
`

// Subtitulo da Pagina
export const Subtitle = styled(Title)`
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  margin-bottom: 37px;
`

// Entrada de texto
export const Input = styled.TextInput.attrs({
  shadowColor: "rgba(0, 0, 0, 0.25)",
  shadowOffset: {
    width: 0,
    height: 0,
  },
  shadowOpacity: 1,
  shadowRadius: 1,
  elevation: 1,
})`
  width: 291.58px;
  height: 48.55px;
  margin-bottom: 32px;

  background: ${props => props.theme.colors.inputFill};
  border-radius: 22px;
  padding-left: 15px;
`;

// Botão de Login
export const LoginBotao = styled(RectButton)`
 align-self: flex-end;
`

// Imagem do botão de Login
export const LoginImage = styled.Image`
`

// Texto para avisar quando o login não foi feito com sucessos
export const Warning = styled.Text`
  font-family: Roboto;
  font-size: 16px;
  line-height: 19px;

  color: #F00;
  margin-bottom: 10px;
`;