import styled from 'styled-components/native';
import { GreenTitle } from '~/styles/global';
import { RectButton } from 'react-native-gesture-handler';

export const Title = styled(GreenTitle)`
  font-size: 30px;
  line-height: 35px;
  margin: 30px 0 69px;
`;

export const Intern = styled.View`
  width: 80%;
  align-items: center;
`;

export const Inline = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  margin-bottom: 48px;
`;

export const Link = styled(RectButton)`
  flex: 1;
  height: 42px;

  flex-direction: row;
  align-items: center;
`;

export const Logo = styled.Image`
  width: 40px;
  height: 35px;
  margin-right: 10px;
`;

export const TextArea = styled.View`
  flex-direction: column;
`;

export const LinkText = styled.Text`
  font-family: Roboto;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;

  width: 100%;

  color: ${props => props.theme.colors.tertiaryText};
`

export const Subtitle = styled.Text`
  font-family: Roboto;
  font-weight: bold;
  font-size: 20px;
  line-height: 28px;

  margin: 14px 0 10px;
  align-self: flex-start;

  color: ${props => props.theme.colors.primaryText};
`;

export const TextInfo = styled.Text`
  font-family: Roboto;
  font-size: 18px;
  line-height: 21px;

  margin-bottom: 4px;
  align-self: flex-start;

  color: ${props => props.theme.colors.primaryText};
`;