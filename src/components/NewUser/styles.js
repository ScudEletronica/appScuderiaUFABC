import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

// Todo o conteúdo do componente
export const Container = styled.View`
  width: 331px;
  height: 90px;
  justify-content: flex-start;

  padding: 3px 14px;

  margin-bottom: 15px;

  background: ${props => props.theme.colors.fill};
`;

// Informação
export const Information = styled.View`
  flex-direction: row;
`;

// Nome da informação
export const InformationTitle = styled.Text`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 21px;
  margin-right: 10px;

  color: ${props => props.theme.colors.primaryText};
`;

// Valor da informação
export const InformationText = styled(InformationTitle)`
  font-weight: normal;
`;

// Botões 
export const Buttons = styled.View`
  flex-direction: row;
  align-self: flex-end;
`

// Botão para rejeitar o usuário
export const Cancel = styled(RectButton)`
  width: 84px;
  height: 29px;
  background: #EB5757;
  border-radius: 44px;

  margin: 0 10px 15px 0;

  align-items: center;
  align-self: flex-end;
  justify-content: center;
  text-align: center;
`;

// Botão para aceitar o usuário
export const Accept = styled(Cancel)`
  background: #57EB57;
`;

// Texto os botões
export const ButtonText = styled.Text`
  font-family: Roboto;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;

  color: #FFF;
`;