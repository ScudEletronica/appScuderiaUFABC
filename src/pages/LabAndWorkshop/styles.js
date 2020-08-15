import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: #FFF;
  align-items: flex-start;
  padding-left: 26px;
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


export const Place = styled.View`
  align-items: flex-start;
  margin-bottom: 5px;
`

export const Status = styled.View`
  flex-direction: row;
  justify-content: center;
`

export const SubTitle = styled.Text`
  font-family: Roboto;
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;

  color: #000000;
`;

export const Open = styled.Text`
  font-family: Roboto;
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
  /* right: 41px; */
  color: #00FF00;
`;

export const Close = styled.Text`
  font-family: Roboto;
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
  /* right: 41px; */

  color: #FF0000;
`;

export const Buttons = styled.View`
  flex-direction: row;
  align-items: center;
`

export const Button = styled.TouchableOpacity`
  width: 110px;
  height: 46px;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  background: #222222;
  border-radius: 38px;
  margin: 14px 18px 10px 0;
`

export const ButtonText = styled.Text`
  font-family: Roboto;
  font-weight: bold;
  font-size: 17px;
  line-height: 20px;

  color: #FFFFFF;
`

export const Notification = styled.View`
  align-items: center;
  justify-content: center;
  margin-right: 10px;
`

export const NotificationText = styled.Text`
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  text-align: center;

  color: #000000;
`

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



