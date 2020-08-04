import styled from 'styled-components/native';
import { Dimensions, Animated } from "react-native";


export const Container = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
`;

export const Fundo1 = styled.Image`
  position: absolute;
  width: ${Dimensions.get('window').width};
  height: 280px;
  top: -198px;
`
export const Fundo2 = styled.Image`
  width: ${Dimensions.get('window').width};
  height: 210px;
  top: -114px;
  margin-bottom: 0;
`

export const Carro = styled.Image`
  margin: 0;
  border: 2px #000;
`

export const Title = styled.Text`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;
  text-align: center;

  color: #343434;
`