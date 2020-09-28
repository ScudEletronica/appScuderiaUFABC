import React, { useContext } from 'react';
import Icon from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native';
import { ThemeContext } from 'styled-components';

import { 
  Container
} from './styles';

function Back({different, cancel}) {
  const { goBack } = useNavigation();
  const { colors } = useContext(ThemeContext);

  function handleGoBack() {
    cancel
    ? cancel()
    : goBack()
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
      onPress={handleGoBack}
    >
      {different
        ?<Icon 
          name="md-chevron-back-circle" 
          size={34} 
          color='#000' 
        />
        :<Icon 
          name="md-chevron-back-circle" 
          size={34} 
          color={colors.primaryIcon}
        />
      }
    </Container>
  );
}

export default Back;