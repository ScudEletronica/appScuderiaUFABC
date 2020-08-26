import styled from 'styled-components/native';
import { Dimensions } from "react-native";

export const Scroll = styled.ScrollView`
  width: 100%;
  height: 829px;
`;

export const Content = styled.View`
  width: 100%;
  height: 829px;
  display: flex;
  align-items: center;
  background: #FFF;
`;

export const RM01 = styled.Image`
  width: 292px;
  height: 195px;
`;

export const Text = styled.Text`
  font-family: Roboto;
  font-size: 16px;
  line-height: 20px;
  text-align: justify;

  margin: 10px 30px 10px 20px;

  color: #222222;
`;

export const SocialMedias = styled.View`
  display: flex;
  align-items: center;
`;

export const Title = styled.Text`
  font-family: Roboto;
  font-weight: bold;
  font-size: 30px;
  line-height: 35px;
  text-align: center;

  margin-bottom: 27px;
  margin-top: 50px;

  color: #222222;
`;
 
export const Fundo3 = styled.Image`
  position: absolute;
  width: 100%;
  height: ${382.28 + Dimensions.get('window').width - 360}px;
  left: 0px;
  bottom: 0px;
`;

export const Fundo4 = styled.Image`
  position: absolute;
  width: 100%;
  height: ${208 + Dimensions.get('window').width - 360}px;
  left: 0px;
  bottom: 193px;
`;

export const Medias = styled.View`
  flex-direction: row;
  margin-bottom: 30px;
`;

export const Instagram = styled.View`
  flex-direction: row;
`;

export const Media = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 18px;
  margin-left: 18px;
`;

export const MediaText = styled.Text`
  margin-top: 10px;
  font-family: Roboto;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;

  color: #222222;
`;

export const WebSite = styled.Image`
  width: 50px;
  height: 50px;
`;

export const Intern = styled.View`

`

export const Lock = styled.Image`
  position: absolute;
  right: 0;
  bottom: 0;
  width: 15.76px;
  height: 25.96px;
  z-index: 2;
`;