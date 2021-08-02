import styled from 'styled-components/native';
import { GreenTitle, Button, ButtonText } from "~/styles/global";

// Titulo da Pagina
export const Title = styled(GreenTitle)`
  font-size: 36px;
  line-height: 42px;
  margin-bottom: 24px;
  margin-top: 17px;
`

// Botões
export const Buttons = styled.View`
  flex-direction: row;
  margin-bottom: 46px;
`

// Lista de medidores
export const Meters = styled.FlatList`
`

// Informações do medidor
export const Meter = styled.View`
  width: 147px;
  height: 97px;

  border-radius: 20px;
  align-items: center;
  margin: 0 11px 44px 11px; 
  padding: 8px;
`

// Nome do medidor
export const MeterName = styled.Text`
  font-family: Roboto;
  font-weight: bold;
  font-size: 18px;
  line-height: 21px;
  margin-bottom: 14px;
  text-align: center;

  color: ${props => props.theme.colors.buttonText};
`

// Valor do medidor
export const MeterValue = styled.Text`
  font-family: Roboto;
  font-weight: bold;
  font-size: 20px;
  line-height: 23px;

  color: #000;
`