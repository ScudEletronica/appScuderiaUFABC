import styled from 'styled-components/native';
import { height } from '~/utils/dimensions';

// Todo o conteúdo do Pagina
export const Container = styled.View`
  flex: 1;
  background: ${props => props.theme.colors.background};
  align-items: center;
`;

// Imagens de Fundo
export const Background = styled.View`
  flex-direction: row;
`

// Imagem de fundo maior
export const Background1 = styled.Image`
  position: absolute;
  width: 100%;
  height: ${height(82)}px;
`

// Imagem de fundo menor
export const Background2 = styled.Image`
  width: 100%;
  height: ${height(96)}px;
  margin-bottom: 0;
`

// Imagem do carro
export const Car = styled.Image`
`

// Titulo da Pagina
export const Title = styled.Text`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;
  text-align: center;

  color: ${props => props.theme.colors.secondaryText};
`

// Gif de carregamento
export const GIF = styled.Image`
  
`