import styled from 'styled-components/native';
import { Animated, Dimensions } from "react-native";


export const Container = styled.View`
  flex: 1;
  background: #FFF;
  align-items: center;
  /* justify-content: flex-start; */
`;

export const Fundo = styled.View`
  flex-direction: row;
`

export const Fundo1 = styled.Image`
  position: absolute;
  width: 100%;
  height: ${82 + Dimensions.get('window').width - 360}px;
`
export const Fundo2 = styled.Image`
  width: 100%;
  height: ${96 + Dimensions.get('window').width - 360}px;
  margin-bottom: 0;
`

export const Carro = styled.Image`
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

export const GIF = styled.Image`
  
`