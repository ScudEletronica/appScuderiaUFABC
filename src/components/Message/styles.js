import styled from 'styled-components/native';
import { BlackTitle, BlackText } from "~/styles/global";
import { RectButton } from "react-native-gesture-handler";

export const Container = styled(RectButton)`
  width: 338px;
  height: 141px;
  padding: 20px;

  border-radius: 25px;
  background: #F0F0F0;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
`;

export const Title = styled(BlackTitle)`
  font-size: 18px;
  line-height: 21px;

  color: #222222;
`;

export const Date = styled.Text`
  font-family: Roboto;
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  text-align: center;

  color: #343434;
`;

export const Content = styled(BlackText)`
  font-size: 14px;
  line-height: 20px;
`;

