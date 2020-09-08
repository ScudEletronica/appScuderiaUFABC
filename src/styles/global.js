import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
`;

export const Scroll = styled.ScrollView`
  flex: 1;
  background: ${props => props.theme.colors.background};
`;


export const Content = styled.View`
  flex: 1;
  align-items: center;
  background: ${props => props.theme.colors.background};
`;

export const GreenTitle = styled.Text`
  font-family: Roboto Condensed;
  font-weight: bold;
  text-align: center;

  color: ${props => props.theme.colors.title};
`;

export const BlackTitle = styled.Text`
  font-family: Roboto;
  font-weight: bold;
  text-align: center;

  color: ${props => props.theme.colors.primaryText};
`;

export const BlackText = styled.Text`
  font-family: Roboto;
  text-align: justify;

  color: ${props => props.theme.colors.primaryText};
`

export const Subtitle = styled.Text`
  font-family: Roboto;
  font-weight: 500;

  color: ${props => props.theme.colors.primaryText};
`

export const Button = styled(RectButton)`
  align-items: center;
  text-align: center;
  justify-content: center;
`

export const ButtonText = styled.Text`
  font-family: Roboto;
  font-weight: bold;

  color: ${props => props.theme.colors.buttonText};
`

export const End = styled.View`
  align-self: flex-start;
  left: 0;
  bottom: 0;
  height: 80px;
  width: 100%;
  justify-content: center;
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
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;

  background: ${props => props.theme.colors.inputFill};
  border-radius: 22px;
  padding-left: 15px;
`;