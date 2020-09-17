import styled from 'styled-components/native';
import { GreenTitle } from '~/styles/global';
import Markdown from 'react-native-markdown-renderer'
import { RectButton } from 'react-native-gesture-handler';

export const Title = styled(GreenTitle)`
  font-size: 36px;
  line-height: 42px;

  margin: 10px 0 17px;
`;

export const MessageView = styled.View`
  background: ${props => props.theme.colors.fill};
  align-items: center;
  width: 100%;

  padding: 14px 12px 20px;
`;

export const MessageTitle = styled.Text`
  font-family: Roboto;
  font-weight: bold;
  font-size: 20px;
  line-height: 23px;
  text-align: center;

  color: ${props => props.theme.colors.primaryText};
`;

export const MessageDate = styled.Text`
  font-family: Roboto;
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  text-align: center;

  color: ${props => props.theme.colors.secondaryText};
`;

export const MessageText = styled(Markdown)`
  font-family: Roboto;
  font-size: 14px;
  line-height: 19px;

  text-align: justify;

  color: ${props => props.theme.colors.tertiaryText};
`;

export const Buttons = styled.View`
  flex-direction: row;
  align-self: flex-end;
  align-items: center;
  justify-content: space-between;
`;

export const Edit = styled(RectButton)`
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;

export const EditText = styled.Text`
  font-family: Roboto;
  font-weight: bold;
  font-size: 20px;
  line-height: 23px;

  color: ${props => props.theme.colors.primaryText};
`;

export const Delete = styled(RectButton)`
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