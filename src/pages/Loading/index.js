import React from 'react';
import { 
  Container, Fundo, Fundo1, Fundo2, Carro, Title, GIF
} from './styles';

const Loading = () => {
  return (
    <Container>
      <Fundo>
        <Fundo2 source={require('./../../assets/Fundo5.png')} />
        <Fundo1 source={require('./../../assets/Fundo6.png')} /> 
      </Fundo>
      <Carro source={require('./../../assets/RM02.png')}/>
      <Title>Work in progress...</Title>
      <GIF source={require('./../../assets/Carregando.png')}/>
    </Container>
  );
}

export default Loading;