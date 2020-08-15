import React from 'react';
import { StyleSheet } from "react-native";

import { 
  Container, ScudHeader, More
} from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons'

function Head() {
  return (
    <Container style={styles.container}>
      <More>
        <Icon name="more-horiz" size={24}/>
      </More>
      <ScudHeader source={require('./../../assets/ScudHeader.png')} />
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    shadowColor: 'rgba(0, 0, 0, 0.3)',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 15,
    shadowOpacity: 1,
    elevation: 5,
  }
})

export default Head;