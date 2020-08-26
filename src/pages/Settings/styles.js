import styled from 'styled-components/native';
import { GreenTitle, Button, ButtonText } from "~/styles/global";

export const Title = styled(GreenTitle)`
  font-size: 30px;
  line-height: 35px;

  margin: 31px 0 78px;
`;

export const Modes = styled.View`
  flex-direction: row;
  margin-bottom: 82px;
`

export const LightMode = styled(Button).attrs({
  shadowColor: "rgba(0, 0, 0, 0.2)",
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 1,
  shadowRadius: 0,
  elevation: 2,
})`
  width: 135px;
  height: 28px;
  
  background: #EDEDED;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.2);
  border-radius: 80px;
  margin: 0 10px;
`

export const LightModeText = styled.Text`
  font-family: Roboto;
  font-weight: 500;
  font-size: 20px;
  line-height: 23px;

  color: #222222;
`

export const DarkMode = styled(LightMode)`
  background: #222222;
  border: 1px solid #222222;
`

export const DarkModeText = styled(LightModeText)`
  color: #F0F0F0;
`

export const Options = styled.View`
  display: flex;
  justify-content: center;
  align-items: flex-start;
`

export const Option = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-top: 20px;
  width: 170px;
  margin-bottom: 21px;
`

export const OptionTitle = styled.Text`
  font-family: Roboto;
  font-weight: 500;
  font-size: 24px;
  line-height: 28px;
  margin-left: 12px;

  color: #222222;
`