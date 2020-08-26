import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  height: 141px;
  padding: 20px;

  background: #F0F0F0;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  margin-bottom: 7px;
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

