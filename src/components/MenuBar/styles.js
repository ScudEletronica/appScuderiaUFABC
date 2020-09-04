import styled from 'styled-components/native';
import { DrawerItem } from '@react-navigation/drawer';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View.attrs({
  shadowColor: "rgba(0, 0, 0, 0.2)",
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 1,
  shadowRadius: 5,
  elevation: 5,
})`
  position: absolute;
  z-index: 6;
  width: 217px;
  height: 100%;
  left: 0px;
  top: 0px;
  background: #FFF;
  border: 2px solid #FFF;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 19px 17px;
`

export const Less = styled(RectButton)`
  
`;

export const Settings = styled(RectButton)`
  
`;

export const Options = styled.View`
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`

export const Profile = styled(DrawerItem)`
  flex-direction: row;
  align-items: center;
  width: 200px;
  margin-bottom: 11px;
`

export const ProfileImage = styled.Image``

export const ProfileText = styled.Text`
  font-family: Roboto;
  font-weight: 500;
  font-size: 20px;
  line-height: 23px;

  color: #343434;
`

export const Option = styled(DrawerItem)`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-top: 20px;
  width: 170px;
`

export const OptionText = styled.Text`
  font-family: Roboto;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  
  color: #343434;  
`