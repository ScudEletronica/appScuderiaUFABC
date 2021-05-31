import styled from 'styled-components/native';
import { BlackTitle, BlackText } from "~/styles/global";
import { RectButton } from "react-native-gesture-handler";

// Todo o conteúdo do componente
export const Container = styled(RectButton)`
  height: 141px;
  padding: 20px;

  background: ${props => props.theme.colors.fill};
  justify-content: center;
`;

// Titulo do recado
export const Title = styled(BlackTitle)`
  font-size: 18px;
  line-height: 21px;

  color: ${props => props.theme.colors.primaryText};
`;

// Data do recado
export const Date = styled.Text`
  font-family: Roboto;
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  text-align: center;

  color: ${props => props.theme.colors.secondaryText};
`;

// Conteúdo do recado
export const Content = styled(BlackText)`
  font-size: 14px;
  line-height: 20px;
`;

// Botão para apagar o recado
export const Trash = styled(RectButton)`
  position: absolute;
  right: 10px;
  top: 10px;
`;