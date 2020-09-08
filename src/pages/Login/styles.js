import styled from 'styled-components/native';
import { Dimensions } from "react-native";
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  background: ${props => props.theme.colors.background};
  align-items: center;
`;

export const Fundo = styled.View`
  flex-direction: row;
`

export const Logo = styled.Image`
  position: absolute;
  width: ${Dimensions.get('window').width - 10}px;
  height: ${160 + Dimensions.get('window').width - 360}px;
  left: 10px;
  top: 12px;
`

export const Fundo1 = styled.Image`
  position: absolute;
  width: 100%;
  height: ${217 + Dimensions.get('window').width - 360}px;
`

export const Fundo2 = styled.Image`
  width: 100%;
  height: ${208 + Dimensions.get('window').width - 360}px;
  top: 21px;
  margin-bottom: 31px;
`

export const Form = styled.View`
  justify-content: space-between;
  align-items: flex-end;
  background-color: rgba(0, 0, 0, 0);
`

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

export const Subtitle = styled(Title)`
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  margin-bottom: 37px;
`

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

export const LoginBotao = styled(RectButton)`
`

export const LoginImage = styled.Image`
`