import styled from 'styled-components/native';
import { GreenTitle } from "~/styles/global";
import { height } from '~/utils/dimensions';

// Informações do perfil de usuário
export const Profile = styled.View`
  align-items: center;
`;

// Imagem de fundo maior
export const Background1 = styled.ImageBackground`
  width: 100%;
  height: ${height(279)}px;
  left: 0px;
  top: 0px;
  justify-content: center;
`;

// Imagem de fundo menor
export const Background2 = styled.ImageBackground`
  position: absolute;
  width: 100%;
  height: ${height(208)}px;
  left: 0px;
  top: 85px;
  margin-bottom: 119px;
`;

// Imagem de Perfil
export const Picture = styled.Image`
  width: 106px;
  height: 106px;
`;

// Nome inteiro do usuário
export const Name = styled.Text`
  font-family: Roboto;
  font-size: 18px;
  line-height: 21px;
  text-align: center;
  margin: 15px 0 10px;

  color: #222;
`;

// RA do usuário
export const RA = styled(Name)`
  font-weight: bold;
  margin-top: 0px;
`;

// Estado da oficina e laboratório
export const Status = styled.View`
  width: 70%;
  flex-direction: row;
  justify-content: space-between;
  margin: 40px 0;
`;

// Lista de Recados
export const Messages = styled.View`
`;

// Titulo da lista de Recados
export const MessagesTitle = styled(GreenTitle)`
  font-size: 25px;
  line-height: 29px;

  margin-bottom: 14px;
`;