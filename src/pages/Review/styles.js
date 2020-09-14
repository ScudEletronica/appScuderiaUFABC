import styled from 'styled-components/native';
import { GreenTitle } from "~/styles/global";
import { RectButton } from 'react-native-gesture-handler';

export const Title = styled(GreenTitle)`
  font-size: 24px;
  line-height: 28px;
  margin: 40px 0 24px;
`;

export const Subtitle = styled.Text`
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 28px;
  margin: 11px 0 5px;

  color: ${props => props.theme.colors.primaryText};
`;

export const Intern = styled.View`
  align-items: flex-start;
`;

export const Inline = styled.View`
  align-items: center;
  flex-direction: row;
  margin-bottom: 12px;
`;

export const InlineTitle = styled.Text`
  font-family: Roboto;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;

  color: ${props => props.theme.colors.primaryText};
`;

export const InlineText = styled(InlineTitle)`
  font-weight: normal;
`;

export const ValueTitle = styled(InlineTitle)`
  font-size: 22px;
  line-height: 26px;
`;

export const ValueText = styled(InlineText)`
  font-size: 22px;
  line-height: 26px;
  margin-right: 70px;
`;

export const Edit = styled(RectButton)`
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 12px;
`;

export const EditText = styled(InlineTitle)`
  font-size: 20px;
  line-height: 23px;
`;

export const Cancel = styled(RectButton)`
  width: 128px;
  height: 34px;
  background: #EB5757;
  border-radius: 80px;

  margin-top: 13px;

  align-items: center;
  align-self: flex-end;
  justify-content: center;
  text-align: center;
  margin-right: 54px;
`;

export const Confirm = styled(Cancel)`
  background: #37BF65;
  margin-right: 0px;
`;

export const ButtonText = styled.Text`
  font-family: Roboto;
  font-weight: bold;
  font-size: 20px;
  line-height: 23px;

  color: #FFF;
`;

export const Way = styled.View`
`;

export const WayTitle = styled.Text`
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 28px;
  margin: 11px 0 5px;

  color: ${props => props.theme.colors.primaryText};
`;