import React from 'react';

import { 
  Container, Information, InformationTitle, InformationText, Value, ValueTitle, ValueText
} from './styles';

const Requirement = () => {
  return (
    <Container>
      <Information>
        <InformationTitle>Produto:</InformationTitle>
        <InformationText>Lorem Ipsum</InformationText>
      </Information>
      <Information>
        <InformationTitle>Quantidade:</InformationTitle>
        <InformationText>5</InformationText>
      </Information>
      <Value>
        <ValueTitle>Valor:</ValueTitle>
        <ValueText>R$ 100,00</ValueText>
      </Value>
    </Container>
  );
}

export default Requirement;