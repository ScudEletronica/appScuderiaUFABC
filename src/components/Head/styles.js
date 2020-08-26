import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialIcons'

export const Container = styled.View.attrs({
  shadowColor: "rgba(0, 0, 0, 0.3)",
  shadowOffset: { width: 0, height: 2 },
  shadowRadius: 15,
  shadowOpacity: 1,
  elevation: 15,
})`
  top: 0;
  right: 0;
  width: 100%;
  height: 48px;
  background: #FFF;
  z-index: 5;
  
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const ScudHeader = styled.Image`
  width: 212px;
  height: 100%;
`

export const More = styled.TouchableOpacity`
  position: absolute;
  top: 13px;
  left: 12px;
`