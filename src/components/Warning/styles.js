import styled from 'styled-components/native';

// Todo o conteúdo do componente
export const Container = styled.View`
  width: 294px;
  height: 136px;
  align-items: center;
  justify-content: center;

  background: ${props => props.theme.colors.background};
  border-radius: 36px;
  padding: 10px 8px;
`; 

// Texto do aviso
export const Message = styled.Text`
  font-family: Roboto;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  text-align: center;

  color: ${props => props.theme.colors.primaryText};
`;

// Botões
export const Buttons = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 10px;
`;