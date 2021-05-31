import styled from 'styled-components/native';
import { GreenTitle } from '~/styles/global';
import Markdown from 'react-native-markdown-renderer'
import { RectButton } from 'react-native-gesture-handler';

// Titulo da Pagina
export const Title = styled(GreenTitle)`
  font-size: 36px;
  line-height: 42px;

  margin: 10px 0 17px;
`;

// Informações do Recado
export const MessageView = styled.View`
  background: ${props => props.theme.colors.fill};
  align-items: center;
  width: 100%;

  padding: 14px 12px 20px;
`;

// Titulo do Recado
export const MessageTitle = styled.Text`
  font-family: Roboto;
  font-weight: bold;
  font-size: 20px;
  line-height: 23px;
  text-align: center;

  color: ${props => props.theme.colors.primaryText};
`;

// Data do Recado
export const MessageDate = styled.Text`
  font-family: Roboto;
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  text-align: center;

  color: ${props => props.theme.colors.secondaryText};
`;

// Conteúdo do recado
export const MessageText = styled(Markdown)`
  font-family: Roboto;
  font-size: 14px;
  line-height: 19px;

  text-align: justify;

  color: ${props => props.theme.colors.tertiaryText};
`;

// Botões para alteração do recado
export const Buttons = styled.View`
  flex-direction: row;
  align-self: flex-end;
  align-items: center;
  justify-content: space-between;
`;

// Botão de edição do recado
export const Edit = styled(RectButton)`
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;

// Texto do botão de edição
export const EditText = styled.Text`
  font-family: Roboto;
  font-weight: bold;
  font-size: 20px;
  line-height: 23px;

  color: ${props => props.theme.colors.primaryText};
`;

// Botão para remover o recado
export const Delete = styled(RectButton)`
  width: 128px;
  height: 34px;
  background: #EB5757;
  border-radius: 80px;

  align-items: center;
  align-self: flex-end;
  justify-content: center;
  text-align: center;
  margin: 0 10px;
`;

// Texto do botão de remoção
export const DeleteText = styled(EditText)`
  color: #FFF;
`;