import styled from 'styled-components/native';
import { GreenTitle } from "~/styles/global";
import { RectButton } from 'react-native-gesture-handler';

// Titulo da Pagina
export const Title = styled(GreenTitle)`
  font-size: 24px;
  line-height: 28px;
  margin: 39px 0 42px;
`;

// Lista de Requisições conforme o tipo
export const Menu = styled.View`
  align-items: flex-start;
  margin-bottom: 40px;
`;

// Cabeçalho da lista
export const MenuHeader = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 22px;
`;

// Nome da Lista
export const MenuTitle = styled.Text`
  font-family: Roboto;
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
  text-align: center;
  margin-left: 10px;

  color: ${props => props.theme.colors.primaryText};
`

// Botão para adicionar uma nova requisição
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