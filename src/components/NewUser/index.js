import React from 'react';
import { StyleSheet } from 'react-native';

import { 
  Container, Information, InformationTitle, InformationText, Buttons,  Accept, Cancel, ButtonText
} from './styles';

// Item da lista de novos usuários
const NewUser = ({user, action}) => {
  // Aceita o usuário
  function handleAccept() {
    action(user.id, true)
  }

  // Rejeita o usuário
  function handleDelete() {
    action(user.id, false)
  }

  // Modelo de apresentação de informação
  function InformationTemplate({name, value}) {
    return (
      <Information>
        <InformationTitle>{name}:</InformationTitle>
        <InformationText>{value}</InformationText>
      </Information>
    )
  }

  return (
    <>
      <Container style={styles.container}>
        {/* Informações do usuário */}
        <InformationTemplate name="Nome" value={user.name} />
        <InformationTemplate name="Email" value={user.email} />
        <InformationTemplate name="Área" value={user.field} />
        <Information>
          <InformationTitle>
            {user.coordinator ? "É coordenador" : "Não é coordenador"}
          </InformationTitle>
        </Information>
      </Container>

      {/* Botões para aceitar e Rejeitar um usuário */}
      <Buttons>
        <Accept 
          onPress={handleAccept}
          style={styles.button}
        >
          <ButtonText>Aceitar</ButtonText>
        </Accept>
        <Cancel 
          onPress={handleDelete}
          style={styles.button}
        >
          <ButtonText>Cancelar</ButtonText>
        </Cancel>
      </Buttons>
    </>
  );
}

const styles = StyleSheet.create({
  // Sombra do container
  container: {
    shadowColor: "rgba(0, 0, 0, 0.18)",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 1,
    elevation: 6,
  },
  // Sombra dos botões
  button: {
    shadowColor: "rgba(0, 0, 0, 0.2)",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 2,
    shadowOpacity: 1,
    elevation: 2,
  }
})

export default NewUser;