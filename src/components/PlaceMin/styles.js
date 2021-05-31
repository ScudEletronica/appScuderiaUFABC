import styled from 'styled-components/native';
import { Subtitle, ButtonText} from "~/styles/global";

// Todo o conteúdo do componente
export const Container = styled.View`
  align-items: center;
`;

// Nome do Local
export const PlaceTitle = styled(Subtitle)`
  font-size: 19px;
  line-height: 22px;
  margin-bottom: 10px;
`

// Local Aberto
export const Open = styled.View.attrs({
  shadowColor: "rgba(0, 0, 0, 0.3)",
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 1,
  shadowRadius: 4,
  elevation: 4,
})`
  align-items: center;
  text-align: center;
  justify-content: center;
  width: 110px;
  height: 38px;
  border-radius: 30px;

  background: #6BFF6B;
`

// Local Fechado
export const Close = styled(Open)`
  background: #FF6B6B;
` 

// Local Requisitado
export const Request = styled(Open)`
  background: #FFFF6B
`

// Texto indicando o estado do local
export const StatusText = styled(ButtonText)`
  font-size: 19px;
  line-height: 22px;
  font-weight: 500;
`