import styled from 'styled-components/native';
import { RectButton } from "react-native-gesture-handler";

export const Content = styled.View`
  align-items: flex-start;
  margin-bottom: 5px;
`

export const Status = styled.View`
  width: 70%;
  flex-direction: row;
  justify-content: space-between;
`

export const SubTitle = styled.Text`
  font-family: Roboto;
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
  margin-right: auto;

  color: ${props => props.theme.colors.tertiaryText};
`;

export const Open = styled.Text`
  font-family: Roboto;
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
  color: #00FF00;
`;

export const Close = styled(Open)`
  color: #FF0000;
`;

export const Request = styled(Open)`
  color: #F0F000;
`;

export const Buttons = styled.View`
  flex-direction: row;
  align-items: center;
`

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

export const Toggle = styled(RectButton)`
`;

export const Information = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;
`

export const InformationTitle = styled.Text`
  font-family: Roboto;
  font-weight: bold;
  font-size: 18px;
  line-height: 21px;
  text-align: center;

  margin-right: 10px;

  color: ${props => props.theme.colors.tertiaryText};
`

export const InformationContent = styled.Text`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;
  text-align: center;

  color: ${props => props.theme.colors.tertiaryText};
`