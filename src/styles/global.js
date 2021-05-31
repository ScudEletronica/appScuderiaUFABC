import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

// Todo o conteúdo do pagina
export const Container = styled.View`
  flex: 1;
`;

// Define a rolagem na página
export const Scroll = styled.ScrollView`
  flex: 1;
  background: ${props => props.theme.colors.background};
`;

// Define o conteúdo interno da pagina
export const Content = styled.View`
  flex: 1;
  align-items: center;
  background: ${props => props.theme.colors.background};
`;

// Titulo principal da página
export const GreenTitle = styled.Text`
  font-family: Roboto Condensed;
  font-weight: bold;
  text-align: center;

  color: ${props => props.theme.colors.title};
`;

// Titulo secundário da página
export const BlackTitle = styled.Text`
  font-family: Roboto;
  font-weight: bold;
  text-align: center;

  color: ${props => props.theme.colors.primaryText};
`;

// Texto da página
export const BlackText = styled.Text`
  font-family: Roboto;
  text-align: justify;

  color: ${props => props.theme.colors.primaryText};
`

// Subtítulo da página
export const Subtitle = styled.Text`
  font-family: Roboto;
  font-weight: 500;

  color: ${props => props.theme.colors.primaryText};
`

// Padrão de Botão
export const Button = styled(RectButton)`
  align-items: center;
  text-align: center;
  justify-content: center;
`

// Padrão texto dentro de um botão
export const ButtonText = styled.Text`
  font-family: Roboto;
  font-weight: bold;

  color: ${props => props.theme.colors.buttonText};
`

// Final da pagina
export const End = styled.View`
  align-self: flex-start;
  left: 0;
  bottom: 0;
  height: 80px;
  width: 100%;
  justify-content: center;
`

// Patrão de entrada de texto
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
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;

  background: ${props => props.theme.colors.inputFill};
  border-radius: 22px;
  padding-left: 15px;
`;