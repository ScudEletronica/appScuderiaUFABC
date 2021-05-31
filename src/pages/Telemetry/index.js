import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import database from '@react-native-firebase/database'

import { 
  Title, Buttons, Select, SelectText, NotSelect, NotSelectText, Meters, Meter, MetersLine, MeterName, MeterValue
} from './styles';
import { Container, Scroll, Content } from '~/styles/global';

import Head from '~/components/Head';
import { useFocusEffect } from '@react-navigation/native';
import Warning from '~/components/Warning';

const reference = database().ref('Meters');

// Telemetria do Carro
const Telemetry = ({navigation}) => {
  const [meters, setMeters] = useState([]); // Medidores
  const [visible, setVisible] = useState(true); // Visibilidade do recado

  // Aviso de quando a telemetria não está sendo usada
  useFocusEffect(() => {
    setVisible(true);
    const onChangeValue = reference.on('value', snapshot => {
      setMeters(snapshot.val())
    })

    return () => reference.off('value', onChangeValue)
  }, [reference])

  // Retorna para a pagina anterior caso a Telemetria não esteja em uso
  function notInUse() {
    setVisible(false);
    navigation.goBack();
  }

  return (
    <Container>
      <Warning 
        onlyOne
        text="A telemetria não está em uso no momento, espere até os teste ou a competição"
        confirm={notInUse}
        cancel={notInUse}
        visible={visible}
      />
      <Head />
      <Scroll>
        <Content>
          <Title>TELEMETRIA</Title>
          {/* Paginas de Medidores conforme as suas categorias */}
          <Buttons>
            <Select style={styles.button}>
              <SelectText>Principal</SelectText>
            </Select>
            <NotSelect style={styles.button}>
              <NotSelectText>Óleo</NotSelectText>
            </NotSelect>
            <NotSelect style={styles.button}>
              <NotSelectText>Combustível</NotSelectText>
            </NotSelect>
            <NotSelect style={styles.button}>
              <NotSelectText>Batéria</NotSelectText>
            </NotSelect>
          </Buttons>

          {/* Mostra os medidores desta pagina */}
          <Meters 
            data={Object.values(meters)}
            renderItem={meter =>
              <Meter style={styles.velocimetro}>
                <MeterName>Vehicle Speed</MeterName>
                <MeterValue>100.00 m/s</MeterValue>
              </Meter>
            }
          />
        </Content>
      </Scroll>
    </Container>
  );
}

const styles = StyleSheet.create({
  velocimetro: {
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 1,
    shadowRadius: 2,
    elevation: 2,
    backgroundColor: "#FF7373"
  },
  termometro: {
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 1,
    shadowRadius: 2,
    elevation: 2,
    backgroundColor: "#05A4D7"
  },
  pressao: {
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 1,
    shadowRadius: 2,
    elevation: 2,
    backgroundColor: "#6299E2"
  },
  gear: {
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 1,
    shadowRadius: 2,
    elevation: 2,
    backgroundColor: "#FFA555"
  },
  button: {
    shadowColor: 'rgba(0, 0, 0, 0.3)',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 2,
    shadowOpacity: 1,
    elevation: 2,
  },
})

export default Telemetry;