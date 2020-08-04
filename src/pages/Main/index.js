import React from 'react';
import { 
  Container, Fundo, Logo, Fundo1, Fundo2, Form, Title, Subtitle, Input, LoginBotao, LoginImage
} from './styles';

export default function Login() {
  return (
    <Container>
      <Fundo2 source={require('./../../assets/Fundo2.png')} />
      <Fundo>
        <Fundo1 source={require('./../../assets/Fundo1.png')} />
        <Logo source={require('./../../assets/Capacete.png')} />
      </Fundo>
      <Form>
          <Title>Bem-Vindo</Title>
          <Subtitle>Efetue seu login a seguir:</Subtitle>
        <Input placeholder="Insira seu Nome" placeholderTextColor={"#969696"} />
        <Input placeholder="Insira seu RA" placeholderTextColor={"#969696"} />
        <LoginBotao>
          <LoginImage source={require('./../../assets/Login.png')} />
        </LoginBotao>
      </Form>
    </Container>
  );
}