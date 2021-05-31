import styled from 'styled-components/native';
import { GreenTitle, Input } from "~/styles/global";
import { RectButton } from 'react-native-gesture-handler';

// Titulo da Pagina
export const Title = styled(GreenTitle)`
  font-size: 24px;
  line-height: 28px;
  margin: 40px 0 52px;
`;

// Nome da entrada de texto
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
  margin-bottom: 10px;
`;

// Entrada de Texto de multilinha
export const BigInput = styled(NewInput)`
  height: 400px;
`;

// Lista de Botões 
export const Buttons = styled.View`
  flex-direction: row;
  align-self: flex-end;
  align-items: center;
  justify-content: space-between;
`;

// Botão para cancelar a criação do Recado
export const Cancel = styled(RectButton)`
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

// Texto dos Botões
export const ButtonText = styled.Text`
  font-family: Roboto;
  font-weight: bold;
  font-size: 20px;
  line-height: 23px;

  color: #FFF;
`;

// Botão para criar um novo Recado
export const Create = styled(RectButton)`
  width: 215px;
  height: 44px;
  background: #4F81BC;
  border-radius: 80px;

  margin-right: 24px;
  align-items: center;
  align-self: flex-end;
  justify-content: center;
  flex-direction: row;
`;

// Texto do botão de criação de Recado
export const CreateText = styled(ButtonText)`
  color: ${props => props.theme.colors.buttonText};
`;