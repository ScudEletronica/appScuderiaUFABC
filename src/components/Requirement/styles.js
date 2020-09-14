import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  width: 331px;
  height: 90px;
  justify-content: flex-start;

  padding: 3px 14px;

  background: ${props => props.theme.colors.fill};
`;

export const Information = styled.View`
  flex-direction: row;
`;

export const InformationTitle = styled.Text`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 21px;
  margin-right: 10px;

  color: ${props => props.theme.colors.primaryText};
`;

export const InformationText = styled(InformationTitle)`
  font-weight: normal;
`;

export const Value = styled(Information)`
  position: absolute;
  left: 14px;
  bottom: 3px;
`;

export const ValueTitle = styled(InformationTitle)`
  font-size: 20px;
  line-height: 23px;
`;

export const ValueText = styled(ValueTitle)`
  font-weight: normal;
`;

export const Cancel = styled(RectButton)`
  width: 84px;
  height: 29px;
  background: #EB5757;
  border-radius: 44px;

  margin: 13px 0 15px;

  align-items: center;
  align-self: flex-end;
  justify-content: center;
  text-align: center;
`;

export const CancelText = styled.Text`
  font-family: Roboto;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;

  color: #FFF;
`;