import React, { useContext, useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { Button } from "react-native-elements";
import { ThemeContext } from 'styled-components';
import { useFocusEffect } from '@react-navigation/native';
import NetInfo from "@react-native-community/netinfo";
import database from '@react-native-firebase/database'

import { 
  Title, Buttons, Meters, Meter, MeterName, MeterValue
} from './styles';
import { Container, Scroll, Content } from '~/styles/global';

import Warning from '~/components/Warning';

const reference = database().ref('Meters');

// Telemetria do Carro
const Telemetry = ({navigation}) => {
  const [meters, setMeters] = useState([]); // Medidores
  const [visible, setVisible] = useState(false); // Visibilidade do recado
  const [page, setPage] = useState('Principal'); // Pagina Selecionada
  const [alertText, setAlertText] = useState('');

  const { colors } = useContext(ThemeContext);

  const styles = StyleSheet.create({
    meter: {
      shadowColor: "rgba(0, 0, 0, 0.25)",
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: 1,
      shadowRadius: 2,
      elevation: 2,
    },
    notOk: {
      backgroundColor: "#FF7373"
    },
    ok: {
      backgroundColor: "#05A4D7"
    },
    velocimetro: {
      backgroundColor: "#FF7373"
    },
    termometro: {
      backgroundColor: "#05A4D7"
    },
    pressao: {
      backgroundColor: "#6299E2"
    },
    gear: {
      backgroundColor: "#FFA555"
    },
    button: {
      width: 78,
      height: 29,
      padding: 0,
    },
    buttonText: {
      fontFamily: 'Roboto',
      fontWeight: 'bold',
      fontSize: 12,
      lineHeight: 14,
    },
    container: {
      alignItems: "center",
      textAlign: "center",
      justifyContent: "center",

      shadowColor: 'rgba(0, 0, 0, 0.3)',
      shadowOffset: { width: 0, height: 2 },
      shadowRadius: 2,
      shadowOpacity: 1,
      elevation: 2,

      borderRadius: 29,
      marginRight: 7,
      marginLeft: 7,
    },
  })

  useEffect(() => {
    console.log(page)
  }, [page])

  useFocusEffect(() => {
    NetInfo.fetch().then(state => {
      if (!state.isConnected) {
        setAlertText("Você não está conectado a internet. Conecte-se e tente novamente.")
        setVisible(true)
      } else {
        const onChangeValue = reference.child("ECU/value").on('value', snapshot => {
          setVisible(snapshot.val() > 0 ? false : true)
          setAlertText("A telemetria não está em uso no momento, espere até os teste ou a competição")
        })
    
        return () => reference.off('value', onChangeValue)
      }
    })
  })

  // Aviso de quando a telemetria não está sendo usada
  useEffect(() => {
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

  function meterColor(item) {
    if(item.hasOwnProperty('min') && item.hasOwnProperty('max')) {
      return item.value > item.min && item.value < item.max ? "ok" : "notOk"
    }
    return "gear"
  }

  const showMeter = ({ item }) => (
    <Meter style={[styles.meter, styles[meterColor(item)]]}>
      <MeterName
        numberOfLines={2}
        adjustsFontSizeToFit
      >{item.name}</MeterName>
      <MeterValue>
        {`${item.value.toFixed(item.aprox)} ${item.unit ? item.unit : ""}`}
      </MeterValue>
    </Meter>
  )

  const PageButton = ({name}) => (
    <Button
      title={name}
      titleStyle={styles.text}
      containerStyle={styles.container}
      buttonStyle={[{backgroundColor: colors.tertiaryButton}, styles.button]}
      titleStyle={[{color: colors.quaternaryText}, styles.buttonText]}
      onPress={() => setPage(name)}
      disabled={page == name ? true : false}
      disabledStyle={[{backgroundColor: "#37BF65"}, styles.button]}
      disabledTitleStyle={[{color: colors.buttonText}, styles.buttonText]}
    />
  )

  return (
    <Container>
      <Warning 
        onlyOne
        text={alertText}
        confirm={notInUse}
        cancel={notInUse}
        visible={visible}
      />
      <Scroll horizontal>
        <Content>
          <Title>TELEMETRIA</Title>
          {/* Paginas de Medidores conforme as suas categorias */}
          <Buttons>
            <PageButton name="Principal"/>
            <PageButton name="Óleo"/>
            <PageButton name="Propulsão"/>
            <PageButton name="Batéria"/>
          </Buttons>

          {/* Mostra os medidores desta pagina */}
          <Meters 
            data={Object.values(meters).filter(value => value.page == page)}
            renderItem={showMeter}
            keyExtractor={item => item.tag}
            horizontal={false}
            numColumns={2}
          />
        </Content>
      </Scroll>
    </Container>
  );
}

export default Telemetry;