import styled from 'styled-components/native';
import { Dimensions } from "react-native";
import { GreenTitle, Subtitle, ButtonText} from "~/styles/global";

export const Fundo = styled.View`
  position: absolute;
  align-self: center;
  align-items: center;
  top: 17px;
`;

export const Fundo7 = styled.ImageBackground`
  position: absolute;
  width: 100%;
  height: ${279 + Dimensions.get('window').width - 360}px;
  left: 0px;
  top: 0px;
`;

export const Fundo8 = styled.ImageBackground`
  width: 100%;
  height: ${208 + Dimensions.get('window').width - 360}px;
  left: 0px;
  top: 85px;
  margin-bottom: 119px;
`;

export const Picture = styled.Image`
  width: 106px;
  height: 106px;
  margin-bottom: 15px;
`;

export const Name = styled.Text`
  font-family: Roboto;
  font-size: 18px;
  line-height: 21px;
  text-align: center;
  margin-bottom: 10px;

  color: #222;
`;

export const RA = styled(Name)`
  font-weight: bold;
`;

export const Status = styled.View`
  width: 70%;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 40px;
`;

export const Place = styled.View`
  align-items: center;
`;

export const PlaceTitle = styled(Subtitle)`
  font-size: 19px;
  line-height: 22px;
  margin-bottom: 10px;
`

export const Open = styled.View.attrs({
  shadowColor: "rgba(0, 0, 0, 0.3)",
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 1,
  shadowRadius: 4,
  elevation: 4,
})`
  align-items: center;
  text-align: center;
  justify-content: center;
  width: 110px;
  height: 38px;
  border-radius: 30px;

  background: #6BFF6B;
`

export const Close = styled(Open)`
  background: #FF6B6B;
` 

export const StatusText = styled(ButtonText)`
  font-size: 19px;
  line-height: 22px;
  font-weight: 500;
`

export const Messages = styled.View`

`;

export const MessagesTitle = styled(GreenTitle)`
  font-size: 25px;
  line-height: 29px;

  margin-bottom: 14px;
`;