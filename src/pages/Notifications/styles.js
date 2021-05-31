import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { GreenTitle } from '~/styles/global';

// Titulo da Pagina
export const Title = styled(GreenTitle)`
  font-size: 30px;
  line-height: 35px;

  margin: 34px 0 85px;
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
  margin-bottom: 30px;
`;

// Texto que indica a notificação
export const InlineText = styled.Text`
  font-family: Roboto;
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  width: 270px;

  color: ${props => props.theme.colors.tertiaryText};
`;

// Botão que alterna a configuração da notificação
export const Toggle = styled(RectButton)`
`;
