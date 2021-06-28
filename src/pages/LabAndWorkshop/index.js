import React, { useState, useContext, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { ThemeContext } from 'styled-components';
import database from '@react-native-firebase/database';

import { 
  Title, Intern, KeysTitleText, Key, KeysTitle, KeyContent, Keys, KeyTitle, KeysTitleLogo, InputKey, Update, UpdateText
} from './styles';

import { Container, Scroll, Content } from "~/styles/global";

import Head from '~/components/Head';
import Warning from '~/components/Warning';
import Place from '~/components/Place';

const Status = "Status"

const reference = database().ref();

// Informações do Laboratório e Oficina
const LabAndWorkshop = ({ route }) => {
  const [status, setStatus] = useState({
    Lab: false, Workshop: false, labRequest: false, workshopRequest: false
  }); // Estado do laboratório e Oficina
  const [totalHoursLab, setTotalHoursLab] = useState(''); // Horas que o usuário esteve no laboratório
  const [totalHoursWorkshop, setTotalHoursWorkshop] = useState(''); // Horas que o usuário esteve na Oficina
  const [keyWorkshop, setKeyWorkshop] = useState(''); // Local da Chave da Oficina
  const [keyLabBlue, setKeyLabBlue] = useState(''); // Local da Chave do Laboratório Azul
  const [keyLabRed, setKeyLabRed] = useState(''); // Local da Chave do Laboratório Vermelha
  const [askedLab, setAskedLab] = useState(false); // Define se alguém requisitou a abertura do laboratório
  const [askedWorkshop, setAskedWorkshop] = useState(false); // Define se alguém requisitou a abertura da oficina
  const [place, setPlace] = useState(''); // Define o local analisado
  const [visible, setVisible] = useState(false); // Visibilidade do aviso
  const [overlayText, setOverlayText] = useState(''); // Define a mensagem do aviso
  const [confirm, setConfirm] = useState(false); // Define o tipo de operação

  const { images } = useContext(ThemeContext);
  const { user, coordinator } = route.params
  
  // Estilos de sombra
  const styles = StyleSheet.create({
    button: {
      shadowColor: "rgba(0, 0, 0, 0.25)",
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 1,
      shadowRadius: 4,
      elevation: 4,
      marginTop: 7,
      marginRight: 18,
      marginLeft: 10,
      marginBottom: 7
    }, 
  })

  // Coloca um valor inteiro em formato de tempo
  function timeFormat(time) {
    if (time < 60) {
      return `${time}min`
    } else if (time%60 == 0){
      return `${time/60}h`
    } else {
      return `${parseInt(time/60)}h${time%60}min`
    }
  }

  // Carrega o estado da Oficina e Laboratório
  // e as horas de uso de ambos pelo usuário
  useFocusEffect(() => {
    const onChangeValue = reference.on('value', snapshot => {
      setStatus(snapshot.child(Status).val())
      setTotalHoursLab(
        timeFormat(
          snapshot.child(`Profile/${user}/labhours`).val()
        )
      );
      setTotalHoursWorkshop(
        timeFormat(
          snapshot.child(`Profile/${user}/workshophours`).val()
        )
      );
    })

    return () => reference.off('value', onChangeValue)
  }, [user])

  // Carrega a localização das chaves
  useEffect(() => {
    const onChangeValue = reference.on('value', snapshot => {
      setKeyWorkshop(snapshot.child('Keys/workshop').val())
      setKeyLabBlue(snapshot.child('Keys/labBlue').val())
      setKeyLabRed(snapshot.child('Keys/labRed').val())
    })

    return () => reference.off('value', onChangeValue)
  }, [user])

  // Define se o Laboratório ou a Oficina podem ser requisitados
  useFocusEffect(() => {
    if (status.Lab == true) {
      setAskedLab(false)
    }
    
    if (status.Workshop == true) {
      setAskedWorkshop(false)
    }
  }, [status])

  // Alterna a visibilidade do Aviso
  function toggleOverlay() {
    setVisible(!visible);
  }

  // Define a mensagem do aviso, o local e o tipo de ação quando o aviso receber confirmação
  function handleAction(actualPlace, action) {
    setPlace(actualPlace);
    setConfirm(action);

    coordinator
    ? setOverlayText(`Tem certeza que quer continuar com essa ação?`)
    : action
      ? setOverlayText('Um dos coordenadores será notificado sobre esse pedido. Tem certeza que quer continuar?')
      : setOverlayText('Certeza que quer cancelar seu pedido?')
    toggleOverlay();
  }

  // Escolhe a ação a ser tomada de acordo com o valor de confirm 
  // e se o usuário é ou não coordenador
  function handleConfirmOverlay() {
    coordinator
    ? handleOpenClose(confirm)
    : handleAsk(confirm)
  }

  // Muda o estado do laboratório e oficina para
  // aberto ou fechado
  function handleOpenClose(confirm) {
    if(place == 'Lab') {
      setAskedLab(confirm);
      reference
        .child(Status)
        .update({Lab: confirm, labRequest: false});
    } else {
      setAskedWorkshop(confirm);
      reference
        .child(Status)
        .update({Workshop: confirm, workshopRequest: false});
    }
    toggleOverlay();
  }

  // Requisita que o lab ou a oficina sejam abertos ou cancela a requisição
  function handleAsk(confirm) {
    if(place == 'Lab') {
      setAskedLab(confirm);
      reference
        .child(Status)
        .update({labRequest: confirm});
    } else {
      setAskedWorkshop(confirm);
      reference
        .child(Status)
        .update({workshopRequest: confirm});
    }
    toggleOverlay();
  }

  // Atualiza a localização das chaves
  function handleKey () {
    reference.child("Keys").update({
      labBlue: keyLabBlue,
      labRed: keyLabRed,
      workshop: keyWorkshop
    });
  }

  // Modelo de apresentação da localização das chaves
  function keyLocation(name, key, set) {
    return (
      <Key>
        <KeyTitle>{name}:</KeyTitle>
        {coordinator
          ? <InputKey 
              value={key}
              onChangeText={text => set(text)}
            />
          : <KeyContent>{key}</KeyContent>
        }
      </Key>
    )
  }

  return (
    <Container>
      <Warning
        text={overlayText}
        visible={visible}
        confirm={handleConfirmOverlay}
        cancel={toggleOverlay}
      />
      <Head />
      <Scroll>
        <Content>
          <Title>Status Lab/Oficina</Title>

          <Intern>
            {/* Laboratório */}
            <Place 
              name="Laboratório"
              place="Lab"
              isOpen={status.Lab}
              request={status.labRequest}
              asked={askedLab}
              hours={totalHoursLab}
              coordinator={coordinator}
              action={handleAction}
            />

            {/* Oficina */}
            <Place 
              name="Oficina"
              place="Workshop"
              isOpen={status.Workshop}
              request={status.workshopRequest}
              asked={askedWorkshop}
              hours={totalHoursWorkshop}
              coordinator={coordinator}
              action={handleAction}
            />

            {/* Chaves */}
            <Keys>
              <KeysTitle>
                <KeysTitleLogo source={images.key}/>
                <KeysTitleText>Chaves</KeysTitleText>
              </KeysTitle>

              {/* Locais das chaves */}
              {keyLocation("Oficina", keyWorkshop, setKeyWorkshop)}
              {keyLocation("Lab Azul", keyLabBlue, setKeyLabBlue)}
              {keyLocation("Lab Vermelha", keyLabRed, setKeyLabRed)}

              {/* Botão para atualizar as chaves */}
              {coordinator &&
                <Update 
                  style={styles.button}
                  onPress={handleKey}
                >
                  <UpdateText>Atualizar Chaves</UpdateText>
                </Update>
              }
            </Keys>
          </Intern>
        </Content>
      </Scroll>
    </Container>
  );
}

export default LabAndWorkshop;