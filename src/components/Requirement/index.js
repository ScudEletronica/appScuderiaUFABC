import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet } from 'react-native';

import { 
  Container, Information, InformationTitle, InformationText, Value, ValueTitle, ValueText, Buttons,  Accept, Cancel, CancelText
} from './styles';

// Item da lista de requisições
const Requirement = ({
  requirement, pending, nothing, allowed, action
}) => {
  const { navigate } = useNavigation()

  // Navega para página de reviews
  function handleReview() {
    navigate('Review', {requirement, edit: true})
  }

  // Aceita a requisição
  function handleAccept() {
    action(requirement.id, true)
  }

  // Rejeita a requisição
  function handleDelete() {
    action(requirement.id, false)
  }

  return (
    <>
      <Container 
        style={{
          shadowColor: "rgba(0, 0, 0, 0.18)",
          shadowOffset: { width: 0, height: 2 },
          shadowRadius: 6,
          shadowOpacity: 1,
          elevation: 6,
        }}
        onPress={handleReview}
      >
        {/* Informações da Requisição */}
        <Information>
          <InformationTitle>Produto:</InformationTitle>
          <InformationText>{requirement.product}</InformationText>
        </Information>
        <Information>
          <InformationTitle>Quantidade:</InformationTitle>
          <InformationText>{requirement.amount}</InformationText>
        </Information>
        <Value>
          <ValueTitle>Valor:</ValueTitle>
          <ValueText>R$ {requirement.value.toFixed(2)}</ValueText>
        </Value>
      </Container>
      {/* Botões para aceitar ou recusar uma requisição */}
      <Buttons>
      {allowed && 
        <Accept 
          onPress={handleAccept}
          style={styles.button}
        >
        <CancelText>Aceitar</CancelText>
        </Accept>
      }
      {pending && 
        <Cancel 
          onPress={handleDelete}
          style={styles.button}
        >
          <CancelText>Cancelar</CancelText>
        </Cancel>
      }
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

export default Requirement;