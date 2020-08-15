import React from 'react';
import { 
  Container, Fundo1, Fundo2, Carro, Title
} from './styles';

const Loading = () => {
  return (
    <Container>
      <Fundo2 source={require('./../../assets/Fundo2.png')} />
      <Fundo1 source={require('./../../assets/Fundo1.png')} /> 
      {/* <Carro source={require('./../../assets/RM02.png')}/> */}
      <Title>Work in progress...</Title>
    </Container>
  );
}

export default Loading;