import styled from 'styled-components/native';

// Todo o conteúdo do componente
export const Container = styled.View`
  position: absolute;
  z-index: 10;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.5);
  align-items: center;
  justify-content: center;
`;

// Conteúdo interno
export const Content = styled.View`
  width: 311px;
  height: 362px;

  background: #D6D6D6;
  border-radius: 20px;
  align-items: center;
  justify-content: center;
`;

// Foto de perfil
export const Avatar = styled.Image`
  width: 186px;
  height: 186px;
  margin-bottom: 50px;
`;

// Botão para Salvar
export const Save = styled.View`
  position: absolute;
  top: 15px;
  right: 16px;
`;

// Lista de opções
export const Options = styled.View`
  flex-direction: row;
`;

// Opção
export const Option = styled.View`
  flex-direction: row;
  align-items: center;
  margin: 0 20px;
`;

// Texto da opção
export const OptionText = styled.Text`
  font-family: Roboto;
  font-size: 24px;
  line-height: 28px;
  margin-left: 12px;

  color: ${props => props.theme.colors.tertiaryText};
`;

// Mudar foto
export const ChangePhoto = styled.Image`
  
`;