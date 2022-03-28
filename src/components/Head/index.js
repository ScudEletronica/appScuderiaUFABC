import React, { useContext } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons'
import { useNavigation } from '@react-navigation/native';
import { useTheme } from 'styled-components';

import { 
  Container, ScudHeader, More
} from './styles';

// Cabeçalho de todas as páginas
function Head() {
  const { openDrawer } = useNavigation()
  const { colors, images } = useTheme();

  function handleOpenMenuBar() {
    openDrawer()
  }

  return (
    <Container >
      {/* Botão para abrir o menu lateral */}
      <More onPress={handleOpenMenuBar}>
        <Icon 
          name="more-horiz" 
          size={24} 
          color={colors.primaryIcon}
        />
      </More>
      {/* Simbolo da Scuderia UFABC */}
      <ScudHeader source={images.header} />
    </Container>
  );
}

export default Head;