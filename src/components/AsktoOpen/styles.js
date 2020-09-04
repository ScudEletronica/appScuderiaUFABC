import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  position: absolute;
  z-index: 10;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.3);
  align-items: center;
  justify-content: center;
`; 

export const Content = styled.View`
  width: 294px;
  height: 136px;
  align-items: center;

  background: #FFFFFF;
  border-radius: 36px;
  padding: 10px;
`; 

export const Message = styled.Text`
  font-family: Roboto;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  text-align: center;

  color: #222222;
`;

export const Buttons = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 10px;
`;

export const Button = styled(RectButton)`
  align-items: center;
  justify-content: center;
  width: 76px;
  height: 30px;
  margin: 0 28px;

  background: #222222;
  border-radius: 29px;
`;

export const ButtonText = styled.Text`
  font-family: Roboto;
  font-weight: bold;
  font-size: 19px;
  line-height: 22px;
  text-align: center;

  color: #FFFFFF;
`;