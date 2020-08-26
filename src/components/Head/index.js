import React from 'react';
import { StyleSheet } from "react-native";

import { 
  Container, ScudHeader, More
} from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons'

function Head() {
  return (
    <Container >
      <More>
        <Icon name="more-horiz" size={24}/>
      </More>
      <ScudHeader source={require('./../../assets/ScudHeader.png')} />
    </Container>
  );
}

export default Head;