import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { GreenTitle } from '~/styles/global';

export const Title = styled(GreenTitle)`
  font-size: 30px;
  line-height: 35px;

  margin: 34px 0 85px;
`;

export const Intern = styled.View`
  width: 80%;
  align-items: center;
`;

export const Inline = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`;

export const InlineText = styled.Text`
  font-family: Roboto;
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  width: 270px;

  color: ${props => props.theme.colors.tertiaryText};
`;

export const Toggle = styled(RectButton)`
`;
