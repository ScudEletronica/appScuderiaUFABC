import styled from 'styled-components/native';
import { RectButton } from "react-native-gesture-handler";

// Todo o conteúdo do componente
export const Container = styled.View`
  align-items: flex-start;
  margin-bottom: 5px;
`

// Estado do Local
export const Status = styled.View`
  width: 70%;
  flex-direction: row;
  justify-content: space-between;
`

// Nome do local
export const Name = styled.Text`
  font-family: Roboto;
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
  margin-right: auto;

  color: ${props => props.theme.colors.tertiaryText};
`;

// Local aberto
export const Open = styled.Text`
  font-family: Roboto;
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
  color: #00FF00;
`;

// Local fechado
export const Close = styled(Open)`
  color: #FF0000;
`;

// Local requisitado a abrir
export const Request = styled(Open)`
  color: #F0F000;
`;

// Botões
export const Buttons = styled.View`
  flex-direction: row;
  align-items: center;
`

// Texto indicando o tipo de notificação
export const NotificationText = styled.Text`
  width: 145px;
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  text-align: center;

  color: ${props => props.theme.colors.tertiaryText};
`

// Botão que alterna o valor da notificação
export const Toggle = styled(RectButton)`
`;

// Horas passadas no local
export const Hour = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;
`

// Titulo das horas
export const HourTitle = styled.Text`
  font-family: Roboto;
  font-weight: bold;
  font-size: 18px;
  line-height: 21px;
  text-align: center;
  margin-right: 10px;
  color: ${props => props.theme.colors.tertiaryText};
`

// Horas passadas
export const HourContent = styled.Text`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;
  text-align: center;
  color: ${props => props.theme.colors.tertiaryText};
`