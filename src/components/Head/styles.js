import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

// Todo o conteúdo do componente
export const Container = styled.View.attrs({
  shadowColor: "rgba(0, 0, 0, 0.3)",
  shadowOffset: { width: 0, height: 2 },
  shadowRadius: 15,
  shadowOpacity: 1,
  elevation: 15,
})`
  top: 0;
  right: 0;
  width: 100%;
  height: 48px;
  background: ${props => props.theme.colors.background};
  z-index: 5;
  
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

// Dimensões do logo da Scuderia
export const ScudHeader = styled.Image`
  width: 212px;
  height: 100%;
`

// Botão para abrir o menu lateral
export const More = styled(RectButton)`
  position: absolute;
  top: 13px;
  left: 12px;
`