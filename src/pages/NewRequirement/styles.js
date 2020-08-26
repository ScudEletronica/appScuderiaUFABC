import styled from 'styled-components/native';
import { GreenTitle, BlackTitle, Input } from "~/styles/global";

export const Title = styled(GreenTitle)`
  font-size: 24px;
  line-height: 28px;
  margin: 40px 0 52px;
`;

export const NewInput = styled(Input)`
  width: 313px;
  height: 49px;
  margin-bottom: 32px;
`;

export const QuantityInput = styled(Input)`
  width: 108px;
  margin-left: auto;
`;

export const Reason = styled.View`
  align-items: flex-start;
`;

export const BigInput = styled(NewInput)`
  height: 211px;
`;

export const PriceInput = styled(QuantityInput)`
  width: 183px;
kkkkk`;

export const Inline = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 30px;
`;

export const NormalText = styled.Text`
  font-family: Roboto;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  margin: 0 10px 10px 0;

  color: #000000;
`;

export const New = styled.TouchableOpacity.attrs({
  shadowColor: 'rgba(0, 0, 0, 0.2)',
  shadowOffset: { width: 0, height: 2 },
  shadowRadius: 0,
  shadowOpacity: 1,
  elevation: 2,
})`
  background: #37BF65;
  width: 307px;
  height: 44px;
  border-radius: 80px;
  margin-bottom: 25px;

  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const NewText = styled.Text`
  font-family: Roboto;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  margin-left: 8px;

  color: #000000;
`;

export const Create = styled.TouchableOpacity.attrs({
  shadowColor: 'rgba(0, 0, 0, 0.2)',
  shadowOffset: { width: 0, height: 2 },
  shadowRadius: 0,
  shadowOpacity: 1,
  elevation: 2,
})`
  background: #4F81BC;
  width: 215px;
  height: 44px;
  border-radius: 80px;
  margin-right: 24px;

  align-items: center;
  justify-content: center;
  flex-direction: row;
  align-self: flex-end;
`;

export const CreateText = styled.Text`
  font-family: Roboto;
  font-weight: bold;
  font-size: 20px;
  line-height: 23px;

  color: #FFFFFF;
`;

export const Mean = styled.View`
  
`;

export const MeanTilte = styled(BlackTitle)`
  font-weight: 500;
  font-size: 24px;
  line-height: 28px;
  margin-bottom: 27px;

  align-self: flex-start;
`;