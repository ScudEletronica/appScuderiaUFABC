import styled from 'styled-components/native';
import { Dimensions } from "react-native";
import { GreenTitle, Content } from '~/styles/global';

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

export const TotalSpace = styled(Content)`
  height: ${Dimensions.get('window').height}px;
`;

export const Fundo = styled.View`
  justify-content: flex-end;
`;

export const Fundo9 = styled.ImageBackground`
  position: absolute;
  width: 100%;
  height: ${208 + Dimensions.get('window').width - 360}px;
  bottom: 72px;
`

export const Fundo10 = styled.ImageBackground`
  position: absolute;
  width: 100%;
  height: ${266 + Dimensions.get('window').width - 360}px;
  bottom: 0;
`

export const Name = styled.View.attrs({
  shadowColor: "rgba(0, 0, 0, 0.25)",
  shadowOffset: { width: 0, height: 4 },
  shadowRadius: 4,
  shadowOpacity: 1,
  elevation: 4,
})`
  align-self: center;
  width: 273px;
  top: 20px;
  background: ${props => props.theme.colors.background};
  border-radius: 40px;
  padding: 10px 26px;
  margin: 50px 0 25px;
`;

export const NameText = styled.Text`
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 23px;
  text-align: center;

  color: ${props => props.theme.colors.primaryText};
`;

export const RA = styled(Name)`
  border-radius: 80px;
  margin-top: 0;
`;

export const RAText = styled(NameText)`
  font-weight: 500;
`;