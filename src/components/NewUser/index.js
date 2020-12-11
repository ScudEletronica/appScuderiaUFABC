import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet } from 'react-native';

import { 
  Container, Information, InformationTitle, InformationText, Value, ValueTitle, ValueText, Buttons,  Accept, Cancel, CancelText
} from './styles';

const NewUser = ({user, action}) => {
  function handleAccept() {
    action(user.id, true)
  }

  function handleDelete() {
    action(user.id, false)
  }

  return (
    <>
      <Container style={styles.container}>
        <Information>
          <InformationTitle>Nome:</InformationTitle>
          <InformationText>{user.name}</InformationText>
        </Information>
        <Information>
          <InformationTitle>Email:</InformationTitle>
          <InformationText>{user.email}</InformationText>
        </Information>
        <Information>
          <InformationTitle>Área:</InformationTitle>
          <InformationText>{user.field}</InformationText>
        </Information>
        <Information>
          {user.coordinator
            ? <InformationTitle>É coordenador</InformationTitle>
            : <InformationTitle>Não é coordenador</InformationTitle>
          }         
        </Information>
      </Container>
      <Buttons>
        <Accept 
          onPress={handleAccept}
          style={styles.button}
        >
        <CancelText>Aceitar</CancelText>
        </Accept>
        <Cancel 
          onPress={handleDelete}
          style={styles.button}
        >
          <CancelText>Cancelar</CancelText>
        </Cancel>
      </Buttons>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    shadowColor: "rgba(0, 0, 0, 0.18)",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 1,
    elevation: 6,
  },
  button: {
    shadowColor: "rgba(0, 0, 0, 0.2)",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 2,
    shadowOpacity: 1,
    elevation: 2,
  }
})

export default NewUser;