import React from 'react';
import { 
  Container, Background, Background1, Background2, Car, Title, GIF
} from './styles';

const Loading = ({visible}) => {
  return (
    <Container>
      <Background>
        <Background2 source={require('./../../assets/Fundo5.png')} />
        <Background1 source={require('./../../assets/Fundo6.png')} /> 
      </Background>
      <Car source={require('./../../assets/RM02.png')}/>
      <Title>Work in progress...</Title>
      <GIF source={require('./../../assets/Carregando.png')}/>
    </Container>
  );
}

export default Loading;