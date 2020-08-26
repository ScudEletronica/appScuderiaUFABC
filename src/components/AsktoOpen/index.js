import React from 'react';

import { 
  Container, Content, Message, Buttons, Button, ButtonText
} from './styles';

const AsktoOpen = () => {
  return (
    <Container>
      <Content>
        <Message>
          Um dos cordenadores será notificado sobre esse pedido.Tem certeza que quer continuar?
        </Message>
        <Buttons>
          <Button>
            <ButtonText>Sim</ButtonText>
          </Button>
          
          <Button>
            <ButtonText>Não</ButtonText>
          </Button>
        </Buttons>
      </Content>
    </Container>
  );
}

export default AsktoOpen;