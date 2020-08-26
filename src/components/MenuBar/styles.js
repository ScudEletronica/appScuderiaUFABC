import styled from 'styled-components/native';

export const Container = styled.View.attrs({
  shadowColor: "rgba(0, 0, 0, 0.2)",
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 1,
  shadowRadius: 0,
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
export const Options = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`

export const Profile = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 200px;
  margin-bottom: 11px;
  /* border: 2px solid #000; */
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
  /* border: 2px solid #000; */
`

export const OptionText = styled.Text`
  font-family: Roboto;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  
  color: #343434;
  
  margin-left: 17px;
`