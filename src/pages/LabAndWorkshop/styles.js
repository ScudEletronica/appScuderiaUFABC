import styled from 'styled-components/native';
import { RectButton } from "react-native-gesture-handler";
import { GreenTitle} from '~/styles/global';

// Titulo da Pagina
export const Title = styled(GreenTitle)`
  font-size: 36px;
  line-height: 42px;

  margin: 23px 0 28px;
`;

// Margin interna
export const Intern = styled.View`
  align-items: flex-start;
  margin-bottom: 5px;
`

// Lista de chaves
export const Keys = styled.View`
  align-items: flex-start;
  margin-top: 9px;
  margin-right: 37px;
`

// Titulo da lista de chaves
export const KeysTitle = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 12px;
`

// Logo da lista de chaves
export const KeysTitleLogo = styled.Image`
  width: 44px;
  height: 44px;
  margin-right: 19px;
`

// Texto do Titulo da lista de Chaves
export const KeysTitleText = styled.Text`
  font-family: Roboto;
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
  margin-right: auto;

  color: ${props => props.theme.colors.tertiaryText};
`;

// Item da lista de chaves
export const Key = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;
`

// Nome da chave
export const KeyTitle = styled.Text`
  font-family: Roboto;
  font-weight: bold;
  font-size: 18px;
  line-height: 21px;
  text-align: center;

  margin-right: 10px;

  color: ${props => props.theme.colors.tertiaryText};
`

// Local da chave
export const KeyContent = styled.Text`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;
  text-align: center;

  color: ${props => props.theme.colors.tertiaryText};
`

// Entrada de texto para alterar o local das chaves
export const InputKey = styled.TextInput`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;
  text-align: center;

  color: ${props => props.theme.colors.tertiaryText};
`

// Botão para atualizar o local das chaves
export const Update = styled(RectButton)`
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

// Texto do botão de atualizar
export const UpdateText = styled.Text`
  font-family: Roboto;
  font-weight: bold;
  font-size: 20px;
  line-height: 23px;

  color: ${props => props.theme.colors.buttonText};
`;