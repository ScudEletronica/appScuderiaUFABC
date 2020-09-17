import styled from 'styled-components/native';
import { GreenTitle, Input } from "~/styles/global";
import { RectButton } from 'react-native-gesture-handler';

export const Title = styled(GreenTitle)`
  font-size: 24px;
  line-height: 28px;
  margin: 40px 0 52px;
`;

export const NewInput = styled(Input)`
  width: 313px;
  height: 49px;
  margin-bottom: 10px;
`;

export const MainText = styled.View`
  align-items: flex-start;
`;

export const BigInput = styled(NewInput)`
  height: 400px;
`;

export const NormalText = styled.Text`
  font-family: Roboto;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  margin: 0 10px 10px 0;

  color: ${props => props.theme.colors.tertiaryText};
`;

export const Buttons = styled.View`
  flex-direction: row;
  align-self: flex-end;
  align-items: center;
  justify-content: space-between;
`;

export const Cancel = styled(RectButton)`
  width: 128px;
  height: 34px;
  background: #EB5757;
  border-radius: 80px;

  align-items: center;
  align-self: flex-end;
  justify-content: center;
  text-align: center;
  margin: 0 10px;
`;

export const ButtonText = styled.Text`
  font-family: Roboto;
  font-weight: bold;
  font-size: 20px;
  line-height: 23px;

  color: #FFF;
`;

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