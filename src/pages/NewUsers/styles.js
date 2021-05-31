import styled from 'styled-components/native';
import { GreenTitle } from "~/styles/global";
import { RectButton } from 'react-native-gesture-handler';

// Titulo da Pagina
export const Title = styled(GreenTitle)`
  font-size: 24px;
  line-height: 28px;
  margin: 39px 0 42px;
`;

// Lista de novos usuários
export const Menu = styled.View`
  align-items: flex-start;
  margin-bottom: 40px;
`;