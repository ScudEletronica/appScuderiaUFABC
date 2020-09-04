import React from 'react';
import { StyleSheet } from 'react-native';

import { 
  Title, Buttons, Select, SelectText, NotSelect, NotSelectText, Meters, Meter, MetersLine, MeterName, MeterValue
} from './styles';
import { Container, Scroll, Content } from '~/styles/global';

import Head from '~/components/Head';

const Telemetry = () => {
  return (
    <Container>
      <Head />
      <Scroll>
        <Content>
          <Title>TELEMETRIA</Title>
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
          <Meters>
            <MetersLine>
              <Meter style={styles.velocimetro}>
                <MeterName>Vehicle Speed</MeterName>
                <MeterValue>100.00 m/s</MeterValue>
              </Meter>
              <Meter style={styles.velocimetro}>
                <MeterName>RPM</MeterName>
                <MeterValue>100.00 RPM</MeterValue>
              </Meter>
            </MetersLine>
            <MetersLine>
              <Meter style={styles.termometro}>
                <MeterName>Manifold air temperature</MeterName>
                <MeterValue>100.00 ºC</MeterValue>
              </Meter>
              <Meter style={styles.pressao}>
                <MeterName>Manifold air pressure</MeterName>
                <MeterValue>100.00 kPa</MeterValue>
              </Meter>
            </MetersLine>
            <MetersLine>
              <Meter style={styles.termometro}>
                <MeterName>Coolant temperature</MeterName>
                <MeterValue>100.00 ºC</MeterValue>
              </Meter>
              <Meter style={styles.gear}>
                <MeterName>Current gear selected</MeterName>
                <MeterValue>N</MeterValue>
              </Meter>
            </MetersLine>
          </Meters>
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