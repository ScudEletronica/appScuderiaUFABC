import styled from 'styled-components/native';
import { Dimensions } from "react-native";

export const Container = styled.View`
  position: absolute;
  z-index: 5;
  width: 217;
  height: 640px;
  left: 0px;
  top: 0px;
  background: #FFFFFF;
  border: 2px solid #FFFFFF;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 19px 17px;
`
export const Options = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20;
`

export const Profile = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 200px;
  margin-bottom: 11px;
`

export const ProfileImage = styled.Image``

export const ProfileText = styled.Text`
  margin-left: 17px;
`

export const Option = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-top: 20px;
  width: 170px;
`

export const OptionText = styled.Text`
  margin-left: 17px;
`