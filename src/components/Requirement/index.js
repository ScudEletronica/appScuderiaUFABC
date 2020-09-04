import React, { useState } from 'react';

import { 
  Container, Information, InformationTitle, InformationText, Value, ValueTitle, ValueText
} from './styles';
import { useFocusEffect } from '@react-navigation/native';

const Requirement = ({product, amount, value}) => {
  return (
    <Container>
      <Information>
        <InformationTitle>Produto:</InformationTitle>
        <InformationText>{product}</InformationText>
      </Information>
      <Information>
        <InformationTitle>Quantidade:</InformationTitle>
        <InformationText>{amount}</InformationText>
      </Information>
      <Value>
        <ValueTitle>Valor:</ValueTitle>
        <ValueText>R$ {value.toFixed(2)}</ValueText>
      </Value>
    </Container>
  );
}

export default Requirement;