import styled from 'styled-components/native';
import { RectButton } from "react-native-gesture-handler";
import { GreenTitle} from '~/styles/global';

export const Content = styled.View`
  flex: 1;
  background: ${props => props.theme.colors.background};
  align-items: center;
`;

export const Title = styled(GreenTitle)`
  font-size: 36px;
  line-height: 42px;

  margin: 23px 0 28px;
`;

export const Intern = styled.View`
  align-items: flex-start;
  margin-bottom: 5px;
`

export const SubTitle = styled.Text`
  font-family: Roboto;
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
  margin-right: auto;

  color: ${props => props.theme.colors.tertiaryText};
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

export const InputKey = styled.TextInput`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;
  text-align: center;

  color: ${props => props.theme.colors.tertiaryText};
`

export const Keys = styled.View`
  align-items: flex-start;
  margin-top: 9px;
  margin-right: 37px;
`

export const KeyTitle = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 12px;
`

export const Create = styled(RectButton)`
  background: #4F81BC;
  width: 215px;
  height: 44px;
  border-radius: 80px;
  margin-right: 24px;

  align-items: center;
  justify-content: center;
  flex-direction: row;
  align-self: flex-end;
`;

export const CreateText = styled.Text`
  font-family: Roboto;
  font-weight: bold;
  font-size: 20px;
  line-height: 23px;

  color: ${props => props.theme.colors.buttonText};
`;

export const Key = styled.Image`
  width: 44px;
  height: 44px;
  margin-right: 19px;
`