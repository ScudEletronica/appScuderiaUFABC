import styled from 'styled-components/native';
import { GreenTitle } from '~/styles/global';
import { RectButton } from 'react-native-gesture-handler';

// Titulo da Pagina
export const Title = styled(GreenTitle)`
  font-size: 30px;
  line-height: 35px;
  margin: 30px 0 69px;
`;

// Margin interna
export const Intern = styled.View`
  width: 80%;
  align-items: center;
`;

// Conteúdo em Linha
export const Inline = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  margin-bottom: 48px;
`;

// Botão para abrir um link
export const Link = styled(RectButton)`
  flex: 1;
  height: 42px;

  flex-direction: row;
  align-items: center;
`;

// Logo da mídia
export const Logo = styled.Image`
  width: 40px;
  height: 35px;
  margin-right: 10px;
`;

// Area contendo o texto da mídia
export const TextArea = styled.View`
  flex-direction: column;
`;

// Nome da mídia
export const LinkText = styled.Text`
  font-family: Roboto;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;

  width: 100%;

  color: ${props => props.theme.colors.tertiaryText};
`

// Titulo da Senha
export const PasswordTitle = styled.Text`
  font-family: Roboto;
  font-weight: bold;
  font-size: 20px;
  line-height: 28px;

  margin: 14px 0 10px;
  align-self: flex-start;

  color: ${props => props.theme.colors.primaryText};
`;

// Valor da Senha
export const PasswordText = styled.Text`
  font-family: Roboto;
  font-size: 18px;
  line-height: 21px;

  margin-bottom: 4px;
  align-self: flex-start;

  color: ${props => props.theme.colors.primaryText};
`;