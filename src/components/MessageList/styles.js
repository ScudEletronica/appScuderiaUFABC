import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  width: 100%;
  height: 141px;
  padding: 20px;

  background: ${props => props.theme.colors.fill};
  align-items: flex-start;
  justify-content: center;
  margin-bottom: 7px;
`;

export const Title = styled.Text`
  font-family: Roboto;
  font-weight: bold;
  font-size: 18px;
  line-height: 21px;
  text-align: left;

  width: 95%;

  color: ${props => props.theme.colors.primaryText};
`;

export const Date = styled.Text`
  font-family: Roboto;
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  text-align: center;

  color: ${props => props.theme.colors.secondaryText};
`;

export const Content = styled.Text`
  font-family: Roboto;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  text-align: justify;

  color: ${props => props.theme.colors.primaryText};
`;

export const Trash = styled(RectButton)`
  position: absolute;
  right: 10px;
  top: 10px;
`;