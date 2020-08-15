import styled from 'styled-components/native';
import Message from '~/components/Message'

export const Container = styled.View`
`;

export const Scroll = styled.ScrollView`
  flex: 1;
  background: #ff0;
`;


export const Content = styled.View`
  flex: 1;
  align-items: center;
  background: #FFF;
`;

export const Title = styled.Text`
  font-family: Roboto Condensed;
  font-weight: bold;
  font-size: 36px;
  line-height: 42px;

  margin-top: 10px;
  margin-bottom: 17px;

  color: #37BF65;
`;

export const NewMessage = styled(Message)`
`;

export const End = styled.View`
  height: 80px;
`

export const Back = styled.View`
  position: absolute;
  left: 7px;
  bottom: 8px;
`;