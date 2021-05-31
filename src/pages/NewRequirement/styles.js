import styled from 'styled-components/native';
import { GreenTitle, BlackTitle, Input } from "~/styles/global";
import { RectButton } from 'react-native-gesture-handler';
import { StyleSheet } from 'react-native';

// Titulo da Pagina
export const Title = styled(GreenTitle)`
  font-size: 24px;
  line-height: 28px;
  margin: 40px 0 52px;
`;

// Nome da entrada
export const InputTitle = styled.Text`
  font-family: Roboto;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  margin: 0 10px 10px 0;

  color: ${props => props.theme.colors.tertiaryText};
`;

// Entrada de Texto 
export const NewInput = styled(Input)`
  width: 313px;
  height: 49px;
  margin-bottom: 32px;
`;

// Entrada de quantidade
export const QuantityInput = styled(Input)`
  width: 108px;
  margin-left: auto;
`;

// Área para especificar a razão da compra
export const Reason = styled.View`
  align-items: flex-start;
`;

// Entrada de texto multilinha
export const BigInput = styled(NewInput)`
  height: 211px;
`;

// Entrada de preço 
export const PriceInput = styled(QuantityInput)`
  width: 183px;
`;

// Conteúdo em Linha
export const Inline = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 30px;
`;

// Botão para adicionar uma nova forma de compra
export const New = styled(RectButton)`
  background: #37BF65;
  width: 307px;
  height: 44px;
  border-radius: 80px;
  margin-bottom: 25px;

  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

// Texto do botão de adicionar forma de compra
export const NewText = styled.Text`
  font-family: Roboto;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  margin-left: 8px;

  color: ${props => props.theme.colors.buttonText};
`;

// Lista de formas de compra
export const Way = styled.View`
`;

// Titulo da forma de compra
export const WayTitle = styled(BlackTitle)`
  font-weight: 500;
  font-size: 24px;
  line-height: 28px;
  margin-bottom: 27px;

  align-self: flex-start;
`;

// Botão de criação de um nova requisição
export const Create = styled(RectButton)`
  background: #4F81BC;
  width: 215px;
  height: 44px;
  border-radius: 80px;
  margin-right: 24px;

  align-items: center;
  justify-content: center;
  flex-direction: row;
  align-self: flex-end;
`;

// Texto do botão de adicionar uma nova requisição
export const CreateText = styled.Text`
  font-family: Roboto;
  font-weight: bold;
  font-size: 20px;
  line-height: 23px;

  color: ${props => props.theme.colors.buttonText};
`;

// Sombra dos botões
export const styles = StyleSheet.create({
  button: {
    shadowColor: "rgba(0, 0, 0, 0.2)",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 2,
    shadowOpacity: 1,
    elevation: 2,
  }
})