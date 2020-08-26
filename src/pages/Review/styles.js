import styled from 'styled-components/native';
import { GreenTitle } from "~/styles/global";

export const Title = styled(GreenTitle)`
  font-size: 24px;
  line-height: 28px;
  margin: 40px 0 24px;
`;

export const Subtitle = styled.Text`
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 28px;
  margin: 11px 0 5px;

  color: #222222;
`;

export const Intern = styled.View`
  align-items: flex-start;
`;

export const Inline = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 12px;
`;

export const InlineTitle = styled.Text`
  font-family: Roboto;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;

  color: #222222;
`;

export const InlineText = styled(InlineTitle)`
  font-weight: normal;
`;

export const ValueTitle = styled(InlineTitle)`
  font-size: 22px;
  line-height: 26px;
`;

export const ValueText = styled(InlineText)`
  font-size: 22px;
  line-height: 26px;
  margin-right: 70px;
`;

export const Edit = styled(InlineTitle)`
  font-size: 20px;
  line-height: 23px;
`;

export const Cancel = styled.TouchableOpacity.attrs({
  shadowColor: "rgba(0, 0, 0, 0.2)",
  shadowOffset: { width: 0, height: 2 },
  shadowRadius: 0,
  shadowOpacity: 1,
  elevation: 2,
})`
  width: 128px;
  height: 34px;
  background: #EB5757;
  border-radius: 80px;

  margin-top: 13px;

  display: flex;
  align-items: center;
  align-self: flex-end;
  justify-content: center;
  text-align: center;
  margin-right: 54px;
`;

export const Confirm = styled(Cancel)`
  background: #37BF65;
  margin-right: 0px;
`;

export const ButtonText = styled.Text`
  font-family: Roboto;
  font-weight: bold;
  font-size: 20px;
  line-height: 23px;

  color: #FFFFFF;
`;

