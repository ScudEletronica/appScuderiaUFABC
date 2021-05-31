import styled from 'styled-components/native';
import { GreenTitle } from '~/styles/global';
import { RectButton } from 'react-native-gesture-handler';

// Titulo da Pagina
export const Title = styled(GreenTitle)`
  font-size: 36px;
  line-height: 42px;

  margin: 10px 0 17px;
`;

// Botão para adicionar um novo recado
export const New = styled(RectButton)`
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

// Texto do botão de adicionar
export const NewText = styled.Text`
  font-family: Roboto;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  margin-left: 8px;

  color: ${props => props.theme.colors.buttonText};
`;