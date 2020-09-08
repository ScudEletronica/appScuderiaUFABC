import styled from 'styled-components/native';
import { GreenTitle, Button, ButtonText } from "~/styles/global";
import { RectButton } from 'react-native-gesture-handler';

export const Title = styled(GreenTitle)`
  font-size: 30px;
  line-height: 35px;

  margin: 31px 0 78px;
`;

export const Modes = styled.View`
  flex-direction: row;
  width: 100%;
  margin-bottom: 82px;
  justify-content: space-between;
`

export const LightMode = styled(RectButton)`
  width: 135px;
  height: 28px;
  
  background: #EDEDED;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.2);
  border-radius: 80px;

  align-items: center;
  justify-content: center;
`

export const LightModeText = styled.Text`
  font-family: Roboto;
  font-weight: 500;
  font-size: 20px;
  line-height: 23px;

  color: #222;
`

export const DarkMode = styled(LightMode)`
  background: #3D3D3D;
  border: 1px solid #222222;
`

export const DarkModeText = styled(LightModeText)`
  color: #F0F0F0;
`

export const Options = styled.View`
  width: 80%;
  
  justify-content: center;
  align-items: flex-start;
`

export const Option = styled(RectButton)`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-top: 20px;
  width: 170px;
  margin-bottom: 21px;
  width: 100%;
`

export const OptionTitle = styled.Text`
  font-family: Roboto;
  font-weight: 500;
  font-size: 24px;
  line-height: 28px;
  margin-left: 12px;

  color: ${props => props.theme.colors.primaryText};
`