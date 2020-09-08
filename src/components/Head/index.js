import React, { useContext } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons'
import { useNavigation } from '@react-navigation/native';
import { ThemeContext } from 'styled-components';

import { 
  Container, ScudHeader, More
} from './styles';

function Head({ navigation }) {
  const { openDrawer } = useNavigation()
  const { colors, images } = useContext(ThemeContext);

  function handleOpenMenuBar() {
    openDrawer()
  }

  return (
    <Container >
      <More onPress={handleOpenMenuBar}>
        <Icon 
          name="more-horiz" 
          size={24} 
          color={colors.primaryIcon}
        />
      </More>
      <ScudHeader source={images.header} />
    </Container>
  );
}

export default Head;