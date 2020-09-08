import styled from 'styled-components/native';
import { GreenTitle } from '~/styles/global';

export const Title = styled(GreenTitle)`
  font-size: 36px;
  line-height: 42px;

  margin: 10px 0 17px;
`;

export const MessageView = styled.View`
  background: ${props => props.theme.colors.fill};
  align-items: center;

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

export const MessageText = styled.Text`
  font-family: Roboto;
  font-size: 14px;
  line-height: 19px;

  text-align: justify;

  color: ${props => props.theme.colors.tertiaryText};
`;

export const End = styled.View`
  height: 80px;
`

export const Back = styled.View`
  position: absolute;
  left: 7px;
  bottom: 8px;
`;