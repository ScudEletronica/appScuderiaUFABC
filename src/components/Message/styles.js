import styled from 'styled-components/native';

export const Container = styled.View`
  width: 338px;
  height: 141px;
  padding: 20px;

  border-radius: 25px;
  background: #F0F0F0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-family: Roboto;
  font-weight: bold;
  font-size: 18px;
  line-height: 21px;
  text-align: center;

  color: #222222;
`;

export const Date = styled.Text`
  font-family: Roboto;
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  text-align: center;

  color: #343434;
`;

export const Content = styled.Text`
  font-family: Roboto;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  text-align: justify;

  color: #222222;
`;

