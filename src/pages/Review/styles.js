import styled from 'styled-components/native';
import { GreenTitle } from "~/styles/global";
import { RectButton } from 'react-native-gesture-handler';

// Titulo da Pagina
export const Title = styled(GreenTitle)`
  font-size: 24px;
  line-height: 28px;
  margin: 40px 0 24px;
`;

// Subtitulo da Pagina
export const Subtitle = styled.Text`
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 28px;
  margin: 11px 0 5px;

  color: ${props => props.theme.colors.primaryText};
`;

// Margin interna
export const Intern = styled.View`
  align-items: flex-start;
`;

// Conteúdo em Linha
export const Inline = styled.View`
  align-items: center;
  flex-direction: row;
  margin-bottom: 12px;
`;

// Titulo da informação
export const InlineTitle = styled.Text`
  font-family: Roboto;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;

  color: ${props => props.theme.colors.primaryText};
`;

// Valor da informação
export const InlineText = styled(InlineTitle)`
  font-weight: normal;
`;

// Titulo para o valor final
export const ValueTitle = styled(InlineTitle)`
  font-size: 22px;
  line-height: 26px;
`;

// Valor final
export const ValueText = styled(InlineText)`
  font-size: 22px;
  line-height: 26px;
  margin-right: 70px;
`;

// Botão para edição da requisição
export const Edit = styled(RectButton)`
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 12px;
`;

// Texto do botão de edição
export const EditText = styled(InlineTitle)`
  font-size: 20px;
  line-height: 23px;
`;

// Botão para cancelar a requisição
export const Cancel = styled(RectButton)`
  width: 128px;
  height: 34px;
  background: #EB5757;
  border-radius: 80px;

  margin-top: 13px;

  align-items: center;
  align-self: flex-end;
  justify-content: center;
  text-align: center;
  margin-right: 54px;
`;

// Botão para confirmar a requisição
export const Confirm = styled(Cancel)`
  background: #37BF65;
  margin-right: 0px;
`;

// Texto para os botões
export const ButtonText = styled.Text`
  font-family: Roboto;
  font-weight: bold;
  font-size: 20px;
  line-height: 23px;

  color: #FFF;
`;

// Lista de Formas de Compra
export const Way = styled.View`
`;

// Titulo da Forma de compra
export const WayTitle = styled.Text`
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 28px;
  margin: 11px 0 5px;

  color: ${props => props.theme.colors.primaryText};
`;