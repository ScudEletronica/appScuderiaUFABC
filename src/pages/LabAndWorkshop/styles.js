import styled from 'styled-components/native';
import { RectButton } from "react-native-gesture-handler";

export const Content = styled.View`
  flex: 1;
  background: #FFF;
  align-items: center;
`;

export const Title = styled.Text`
  font-family: Roboto Condensed;
  font-weight: bold;
  font-size: 36px;
  line-height: 42px;

  margin-top: 23px;
  margin-bottom: 28px;

  color: #37BF65;
`;

export const Intern = styled.View`
  align-items: flex-start;
  margin-bottom: 5px;
`

export const Place = styled.View`
  align-items: flex-start;
  margin-bottom: 5px;
`

export const Status = styled.View`
  width: 70%;
  flex-direction: row;
  justify-content: space-between;
`

export const SubTitle = styled.Text`
  font-family: Roboto;
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
  margin-right: auto;

  color: #000000;
`;

export const Open = styled.Text`
  font-family: Roboto;
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
  /* margin-left: auto; */
  color: #00FF00;
`;

export const Close = styled.Text`
  font-family: Roboto;
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;


  color: #FF0000;
`;

export const Buttons = styled.View`
  flex-direction: row;
  align-items: center;
`

export const ButtonAsk = styled(RectButton)`
  width: 110px;
  height: 46px;
  text-align: center;
  align-items: center;
  justify-content: center;
  background: #222222;
  border-radius: 38px;
  margin: 14px 18px 10px 0;
`

export const ButtonCancel = styled(ButtonAsk)`
  background: #EB5757;
`;

export const ButtonText = styled.Text`
  font-family: Roboto;
  font-weight: bold;
  font-size: 17px;
  line-height: 20px;

  color: #FFFFFF;
`

export const NotificationText = styled.Text`
  width: 145px;
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  text-align: center;

  color: #000000;
`

export const Toggle = styled(RectButton)`
`;

export const Information = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;
`

export const InformationTitle = styled.Text`
  font-family: Roboto;
  font-weight: bold;
  font-size: 18px;
  line-height: 21px;
  text-align: center;

  margin-right: 10px;

  color: #000000;
`

export const InformationContent = styled.Text`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;
  text-align: center;

  color: #000000;
`

export const Keys = styled.View`
  align-items: flex-start;
  margin-top: 9px;
  margin-right: 37px;
`

export const KeyTitle = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 12px;
`

export const Key = styled.Image`
  width: 44px;
  height: 44px;
  margin-right: 19px;
`



