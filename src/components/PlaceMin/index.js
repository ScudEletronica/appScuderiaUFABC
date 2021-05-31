import React from 'react';

import { 
  Container, PlaceTitle, Open, Close, Request, StatusText
} from './styles';

// Informação do estado da oficina ou laboratório
const PlaceMin = ({
  name, isOpen, request
}) => {
  return (
    <Container>
      {/* Estado do Laboratório ou Oficina */}
      <PlaceTitle>{name}</PlaceTitle>
      { isOpen
        ? <Open>
            <StatusText>Aberto</StatusText>
          </Open>
        : request
        ? <Request>
            <StatusText>Requisitado</StatusText>
          </Request>
        : <Close>
            <StatusText>Fechado</StatusText>
          </Close>
      }
    </Container>
  );
}

export default PlaceMin;