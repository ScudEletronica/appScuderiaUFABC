import styled from 'styled-components/native';
import { Dimensions, Animated } from "react-native";


export const Container = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
`;

export const Fundo = styled.View`
  position: absolute;
  top: 0;
  left: 0;
`
export const Logo = styled.Image`
  position: absolute;
  width: ${Dimensions.get('window').width};
  height: 160px;
  left: 10px;
  top: 12px;
`
export const Fundo1 = styled.Image`
  position: absolute;
  width: ${Dimensions.get('window').width};
  height: 279px;
  top: -62px;
`
export const Fundo2 = styled.Image`
  width: ${Dimensions.get('window').width};
  height: 208px;
  top: 21px;
  margin-bottom: 31px;
`

export const Form = styled.View`
  display: flex;
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

  color: #343434;
`

export const Subtitle = styled(Title)`
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  margin-bottom: 37px;
`

export const Input = styled.TextInput`
  width: 291.58px;
  height: 48.55px;
  margin-bottom: 32px;
  color: #000;

  background: #E6E6E6;
  /*box-shadow: inset 0px 0px 1px rgba(0, 0, 0, 0.25);*/
  border-radius: 22px;
`;

export const LoginBotao = styled.TouchableOpacity`
`

export const LoginImage = styled.Image`
`