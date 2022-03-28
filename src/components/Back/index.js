import React, { useContext } from 'react';
import Icon from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native';
import { useTheme } from 'styled-components';

import { 
  Container
} from './styles';

// Botão de retorno para a página anterior
function Back({different, cancel}) {
  const { goBack } = useNavigation();
  const { colors } = useTheme();

  // Função de voltar 
  // pode ser simplesmente voltar a para a pagina anterior 
  // ou cancelar uma ação e voltar
  function handleGoBack() {
    cancel ? cancel() : goBack()
  }

  return (
    // Botão de voltar
    <Container 
      style={{
        shadowColor: "rgba(0, 0, 0, 0.3)",
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 2,
        shadowOpacity: 1,
        elevation: 2,
      }}
      onPress={handleGoBack}
    >
      <Icon 
        name="md-chevron-back-circle" 
        size={34} 
        color={different ? '#000' : colors.primaryIcon} 
      />
    </Container>
  );
}

export default Back;