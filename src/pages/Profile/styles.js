import styled from 'styled-components/native';
import { Dimensions } from "react-native";
import { GreenTitle } from '~/styles/global';

export const Title = styled(GreenTitle)`
  font-size: 30px;
  line-height: 35px;

  margin: 30px 0 22px;
`;

export const Avatar = styled.View`
`;

export const AvatarImage = styled.Image`
`;

export const Cam = styled.View`
  align-self: flex-end;
  bottom: 25px;
`;

export const Fundo = styled.View`
  justify-content: flex-end;
`;

export const Fundo9 = styled.Image`
  position: absolute;
  width: 100%;
  height: ${208 + Dimensions.get('window').width - 360}px;
  bottom: 72px;
`

export const Fundo10 = styled.Image`
  position: absolute;
  width: 100%;
  height: ${266 + Dimensions.get('window').width - 360}px;
  bottom: 0;
`

export const Name = styled.View.attrs({
  shadowColor: "rgba(0, 0, 0, 0.25)",
  shadowOffset: { width: 0, height: 4 },
  shadowRadius: 0,
  shadowOpacity: 1,
  elevation: 4,
})`
  align-self: center;
  width: 273px;
  top: 20px;
  background: #FFFFFF;
  border-radius: 40px;
  padding: 10px 26px;
  margin-bottom: 25px;
`;

export const NameText = styled.Text`
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 23px;
  text-align: center;

  color: #222222;
`;

export const RA = styled(Name)`
  border-radius: 80px;
`;

export const RAText = styled(NameText)`
  font-weight: 500;
`;