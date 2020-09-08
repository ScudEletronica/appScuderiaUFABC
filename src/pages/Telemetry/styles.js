import styled from 'styled-components/native';
import { GreenTitle, Button, ButtonText } from "~/styles/global";

export const Title = styled(GreenTitle)`
  font-size: 36px;
  line-height: 42px;
  margin-bottom: 24px;
  margin-top: 17px;
`

export const Buttons = styled.View`
  flex-direction: row;
  margin-bottom: 46px;
`

export const Select = styled(Button)`
  width: 78px;
  height: 29px;

  background: #37BF65;
  border-radius: 29px;
  margin: 0 7px; 
`

export const SelectText = styled(ButtonText)`
  font-size: 12px;
  line-height: 14px;
`

export const NotSelect = styled(Select)`
  background: ${props => props.theme.colors.background};
`

export const NotSelectText = styled(SelectText)`
  color: ${props => props.theme.colors.quaternaryText};
`

export const Meters = styled.View`
`

export const MetersLine = styled.View`
  flex-direction: row;
`

export const Meter = styled.View`
  width: 147px;
  height: 97px;

  border-radius: 20px;
  align-items: center;
  margin: 0 11px 44px 11px; 
  padding: 8px;
`

export const MeterName = styled.Text`
  font-family: Roboto;
  font-weight: bold;
  font-size: 18px;
  line-height: 21px;
  margin-bottom: 14px;
  text-align: center;

  color: ${props => props.theme.colors.buttonText};
`

export const MeterValue = styled.Text`
  font-family: Roboto;
  font-weight: bold;
  font-size: 20px;
  line-height: 23px;

  color: #000;
`