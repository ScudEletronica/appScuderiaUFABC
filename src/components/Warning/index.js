import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { ThemeContext } from 'styled-components';
import { Button, Overlay } from 'react-native-elements';

import { 
  Container, Message, Buttons
} from './styles';

// Modelo para avisos
const Warning = ({text, cancel, confirm, visible, onlyOne}) => {
  const { colors } = useContext(ThemeContext);

  const styles = StyleSheet.create({
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      width: 76,
      height: 30,
      marginRight: 28,
      marginLeft: 28,
  
      backgroundColor: colors.secondaryButton,
  
      borderRadius: 29,
    },
    text: {
      fontFamily: 'Roboto',
      fontWeight: 'bold',
      fontSize: 19,
      lineHeight: 22,
      textAlign: 'center',

      color: colors.buttonText,
    },
    overlay: {
      borderRadius: 36,
      width: 293,
      height: 135,
      alignItems: 'center',
      justifyContent: 'center',
    }
  })

  return (
    <Overlay
      overlayStyle={styles.overlay}
      isVisible={visible} 
      onBackdropPress={cancel}
    >
      <Container>
          <Message>{text}</Message>
          {/*
            Escolhe entre duas opções:
            Apenas uma opção "Ok"
            Duas opções "Sim" e "Não"
          */}
          {onlyOne
            ? <Buttons>
                <Button 
                  title={'OK'}
                  titleStyle={styles.text}
                  buttonStyle={styles.button}
                  onPress={confirm}
                />
              </Buttons>
            : <Buttons>
                <Button 
                  title={'Sim'}
                  titleStyle={styles.text}
                  buttonStyle={styles.button}
                  onPress={confirm}
                />

                <Button 
                  title={'Não'}
                  titleStyle={styles.text}
                  buttonStyle={styles.button}
                  onPress={cancel}
                />
              </Buttons>
          }
      </Container>
    </Overlay>
  );
}

export default Warning;