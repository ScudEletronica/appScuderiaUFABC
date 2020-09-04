import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons'
import { useNavigation } from '@react-navigation/native';

import { 
  Container, ScudHeader, More
} from './styles';

function Head({ navigation }) {
  const { openDrawer } = useNavigation()

  function handleOpenMenuBar() {
    openDrawer()
  }

  return (
    <Container >
      <More onPress={handleOpenMenuBar}>
        <Icon name="more-horiz" size={24}/>
      </More>
      <ScudHeader source={require('./../../assets/ScudHeader.png')} />
    </Container>
  );
}

export default Head;