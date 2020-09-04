import styled from 'styled-components/native';

export const Container = styled.View.attrs({
  shadowColor: "rgba(0, 0, 0, 0.18)",
  shadowOffset: { width: 0, height: 2 },
  shadowRadius: 6,
  shadowOpacity: 1,
  elevation: 6,
})`
  width: 331px;
  height: 90px;
  justify-content: flex-start;

  padding: 3px 14px;

  background: #F0F0F0;
`;

export const Information = styled.View`
  flex-direction: row;
`;

export const InformationTitle = styled.Text`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 21px;
  margin-right: 10px;

  color: #222222;
`;

export const InformationText = styled(InformationTitle)`
  font-weight: normal;
`;

export const Value = styled(Information)`
  position: absolute;
  left: 14px;
  bottom: 3px;
`;

export const ValueTitle = styled(InformationTitle)`
  font-size: 20px;
  line-height: 23px;
`;

export const ValueText = styled(ValueTitle)`
  font-weight: normal;
`;