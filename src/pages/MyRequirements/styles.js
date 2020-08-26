import styled from 'styled-components/native';
import { GreenTitle } from "~/styles/global";

export const Title = styled(GreenTitle)`
  font-size: 24px;
  line-height: 28px;
  margin: 39px 0 42px;
`;

export const Menu = styled.View`
  align-items: flex-start;
  margin-bottom: 40px;
`;

export const MenuHeader = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 22px;
`;

export const MenuTitle = styled.Text`
  font-family: Roboto;
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
  text-align: center;
  margin-left: 10px;

  color: #222222;
`

export const Cancel = styled.TouchableOpacity.attrs({
  shadowColor: "rgba(0, 0, 0, 0.2)",
  shadowOffset: { width: 0, height: 2 },
  shadowRadius: 0,
  shadowOpacity: 1,
  elevation: 2,
})`
  width: 84px;
  height: 29px;
  background: #EB5757;
  border-radius: 44px;

  margin-top: 13px;

  display: flex;
  align-items: center;
  align-self: flex-end;
  justify-content: center;
  text-align: center;
`;

export const CancelText = styled.Text`
  font-family: Roboto;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;

  color: #FFFFFF;
`;

export const New = styled.TouchableOpacity.attrs({
  shadowColor: 'rgba(0, 0, 0, 0.2)',
  shadowOffset: { width: 0, height: 2 },
  shadowRadius: 0,
  shadowOpacity: 1,
  elevation: 2,
})`
  background: #37BF65;
  width: 220px;
  height: 42px;
  border-radius: 80px;
  margin-right: 23px;

  align-items: center;
  justify-content: center;
  flex-direction: row;
  align-self: flex-end;
`;

export const NewText = styled.Text`
  font-family: Roboto;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  margin-left: 8px;

  color: #000000;
`;