import styled from 'styled-components/native';

export const Title = styled.Text`
  font-family: Roboto Condensed;
  font-weight: bold;
  font-size: 36px;
  line-height: 42px;

  margin-top: 10px;
  margin-bottom: 17px;

  color: #37BF65;
`;

export const MessageView = styled.View`
  background: #F0F0F0;
  align-items: center;

  padding: 14px 12px 20px;
`;

export const MessageTitle = styled.Text`
  font-family: Roboto;
  font-weight: bold;
  font-size: 20px;
  line-height: 23px;
  text-align: center;

  color: #222222;
`;

export const MessageDate = styled.Text`
  font-family: Roboto;
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  text-align: center;

  color: #343434;
`;

export const MessageText = styled.Text`
  font-family: Roboto;
  font-size: 14px;
  line-height: 19px;

  text-align: justify;

  color: #000000;
`;

export const End = styled.View`
  height: 80px;
`

export const Back = styled.View`
  position: absolute;
  left: 7px;
  bottom: 8px;
`;