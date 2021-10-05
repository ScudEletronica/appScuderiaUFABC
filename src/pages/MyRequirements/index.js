import React, { useContext, useEffect, useState } from 'react';
import { StyleSheet } from "react-native";
import { ThemeContext } from 'styled-components';
import { useFocusEffect } from '@react-navigation/native';
import { useUser } from '~/contexts/AuthContext';
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import database from '@react-native-firebase/database'

import { 
  Title, Menu, MenuHeader, MenuTitle, New, NewText
} from './styles';

import {
  Container, Scroll, Content, End
} from '~/styles/global'

import Requirement from '~/components/Requirement';
import Back from '~/components/Back';
import Warning from '~/components/Warning';

const reference = database().ref(); 

// Requisições realizadas
const MyRequirements = ({ navigation }) => {
  const [pendingRequirements, setPendingRequirements] = useState([]) // Armazena as requisições pendentes
  const [acceptRequirements, setAcceptRequirements] = useState([]) // Armazena as requisições aceitas
  const [admin, setAdmin] = useState(false); // Verifica se o usuário é da Administração
  const [manager, setManager] = useState(false); // Verifica se o usuário é da Gestão
  const [id, setID] = useState('') // Id da requisição selecionada
  const [overlayText, setOverlayText] = useState('') // Define a mensagem do aviso
  const [visible, setVisible] = useState(false); // Visibilidade do aviso
  const [confirm, setConfirm] = useState(false); // Define o tipo de operação

  const { colors } = useContext(ThemeContext);

  const { user, field, name } = useUser();

  // Determina os valores de admin e manager
  useEffect(() => {
    setAdmin(field === "Administração")
    setManager(field === "Gerência")
  }, [field])

  // Carrega as requisições
  useFocusEffect(() => {
    const onChangeValue = reference.on('value', snapshot => {
      var pending = [];
      var accept = [];
      const requirements = snapshot.child('Requirements').val()
      
      if(requirements) {
        if(manager) {
          Object.values(requirements).forEach(element => {
            element.acceptManager
            ? accept.push(element)
            : pending.push(element)
          });
        } else if(admin) {
          Object.values(requirements).forEach(element => {
            if(element.acceptAdmin) accept.push(element)
            else if(element.acceptManager) pending.push(element)
          });
        } else {
          Object.values(requirements).forEach(element => {  
            if (element.name == name) {
              element.acceptAdmin
              ? accept.push(element)
              : pending.push(element)
              return
            }
          });
        }
      }
      
      setPendingRequirements(pending)
      setAcceptRequirements(accept)
    })

    return () => reference.off('value', onChangeValue)
  })
  
  // Navega para pagina de criação de requisições
  function handleCreateNewRequirement() {
    navigation.navigate('NewRequirement', {
      requirement: {
        name,
        product: '',
        amount: '',
        id: 1,
        reason: '',
        value: '',
        ways: []
      },
      edit: false
    })
  }

  // Alterna a visibilidade do Aviso
  function toggleOverlay() {
    setVisible(!visible);
  }

  // Define a mensagem do aviso, o local e o tipo de ação quando o aviso receber confirmação
  function handleAction(id, action) {
    setID(id);
    setConfirm(action)

    action
    ? setOverlayText("Tem certeza de que quer aceitar essa requisição?")
    : setOverlayText("Tem certeza de que quer cancelar essa requisição?")
    toggleOverlay();
  }

  // Escolhe a ação conforme o valor de confirm
  function handleConfirmOverlay() {
    confirm
    ? handleAccept()
    : handleDelete()
  }
  
  // Remove uma requisição
  function handleDelete() {
    reference.child(`Requirements/${id}`).remove();
    
    toggleOverlay();
  }
  
  // Aceita uma requisição
  function handleAccept() {
    manager
    ? reference.child(`Requirements/${id}`).update({acceptManager: true})
    : reference.child(`Requirements/${id}`).update({acceptAdmin: true})

    toggleOverlay();
  }

  return (
    <Container>
      <Warning 
        text={overlayText}
        cancel={toggleOverlay}
        confirm={handleConfirmOverlay}
        visible={visible}
      />
      <Scroll>
        <Content>
          <Title>MINHAS REQUISIÇÕES</Title>
          <Menu>
            <MenuHeader>
              <Ionicons name="hourglass-outline" size={28} color={colors.primaryIcon}/>
              <MenuTitle>Pendentes</MenuTitle>
            </MenuHeader>
            {pendingRequirements.map(pending => (
              <Requirement 
                key={pending.id}
                requirement={pending}
                pending
                allowed={manager || admin}
                action={handleAction}
              />
            ))}
          </Menu>

          <Menu>
            <MenuHeader>
              <AntDesign name="checkcircle" size={28} color="#0f0"/>
              <MenuTitle>Aceitas</MenuTitle>
            </MenuHeader>
            {acceptRequirements.map(accept => (
              <Requirement 
                key={accept.id}
                requirement={accept}
              />
            ))}
          </Menu>
        </Content>

        {/* Fim da Página */}
        <End>
          {/* Botão para criação de nova requisição */}
          {!(manager || admin) &&
            <New 
              style={styles.button} 
              onPress={handleCreateNewRequirement}
            >
              <AntDesign name="plus" size={16}/>
              <NewText>Adicionar Requisição</NewText>
            </New>
          }
          <Back />
        </End>
      </Scroll>
    </Container>
  );
}

const styles = StyleSheet.create({
  button: {
    shadowColor: "rgba(0, 0, 0, 0.2)",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 2,
    shadowOpacity: 1,
    elevation: 2,
  }
})

export default MyRequirements;