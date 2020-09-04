import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native';

import { 
  Container
} from './styles';

function Back() {
  const { goBack } = useNavigation();

  function handleGoBack() {
    goBack()
  }

  return (
    <Container 
      style={{
        shadowColor: "rgba(0, 0, 0, 0.3)",
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 2,
        shadowOpacity: 1,
        elevation: 2,
      }}
      onPress={handleGoBack}>
      <Icon name="md-chevron-back-circle" size={34}/>
    </Container>
  );
}

export default Back;