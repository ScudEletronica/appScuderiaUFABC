import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet } from 'react-native';

import { 
  Container, Information, InformationTitle, InformationText, Value, ValueTitle, ValueText, Cancel, CancelText
} from './styles';

const Requirement = ({requirement, pending, nothing}) => {
  const { navigate } = useNavigation()

  function handleReview() {
    navigate('Review', {requirement})
  }

  if (nothing) {
    return (
      <Container style={styles.container}>
        <Information>
          <InformationTitle>Nenhuma Requisição</InformationTitle>
        </Information>
      </Container>
    )
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
      {pending && 
        <Cancel style={styles.button}>
          <CancelText>Cancelar</CancelText>
        </Cancel>
      }
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