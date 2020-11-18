import React, { useContext, useState } from 'react';
import { StyleSheet } from 'react-native';
import { 
  useFocusEffect, useNavigation 
} from '@react-navigation/native';
import { ThemeContext } from 'styled-components';
import { storeJSON } from '~/utils/store';
import Icon from 'react-native-vector-icons/AntDesign'
import database from '@react-native-firebase/database'

import { 
  Title, Subtitle, Intern, Inline, InlineTitle, InlineText, ValueTitle, ValueText, Edit, EditText, Cancel, Confirm, ButtonText, Way, WayTitle
} from './styles';

import {
  Container, Scroll, Content
} from '~/styles/global'

import Head from '~/components/Head';
import Warning from '~/components/Warning';

const reference = database().ref('Requirements');
const others = database().ref();

const Review = ({ route }) => {
  const [overlayText, setOverlayText] = useState('');
  const [visible, setVisible] = useState(false);
  const [confirm, setConfirm] = useState(false);
  const [amount, setAmount] = useState(0);
  const [profiles, setProfiles] = useState('')

  const { navigate } = useNavigation();
  const { requirement, edit } = route.params;
  const { colors } = useContext(ThemeContext);

  useFocusEffect(() => {
    const onValueChange = others.on('value', snapshot => {
      setAmount(snapshot.child("Status/pendingRequirements").val())
      setProfiles(snapshot.child("Profile").val())
    })

    return () => reference.off('value', onValueChange)
  }, [others]);

  function toggleOverlay() {
    setVisible(!visible);
  }

  function handleCancel() {
    setOverlayText("Deseja mesmo voltar? Dessa forma irá perder os dados já preenchidos");
    setConfirm(false)
    toggleOverlay();
  }
  
  function handleConfirm() {
    setConfirm(true);
    edit
    ? setOverlayText("Certeza que quer editar essa requisição?")
    : setOverlayText("Certeza que quer fazer essa requisição?");
    toggleOverlay()
  }
  
  function handleConfirmOverlay() {
    confirm
    ? edit
      ? handleUpdate()
      : handleNew()
    : cancel()
  }

  function cancel() {
    setVisible(false);
    navigate('MyRequirements')
  }

  function handleNew() {
    const NewReference = reference.push();
    const id = NewReference.key;

    NewReference.set({
      name: requirement.name, 
      product: requirement.product, 
      amount: requirement.amount, 
      reason: requirement.reason, 
      ways: requirement.ways, 
      value: requirement.value,
      id
    })

    others.child('Status')
      .update({pendingRequirements: amount + 1});
      global.requirements.pending = amount + 1;
      storeJSON('requirements', global.requirements);

    setVisible(false);
    navigate('MyRequirements')
  }

  function handleUpdate() {
    reference.child(requirement.id).update({
      name: requirement.name, 
      product: requirement.product, 
      amount: requirement.amount, 
      reason: requirement.reason, 
      ways: requirement.ways, 
      value: requirement.value,
    })

    setVisible(false);
    navigate('MyRequirements')
  }
  
  function handleEdit() {
    edit
    ? navigate('NewRequirement', { requirement, edit: true })
    : navigate('NewRequirement', { requirement, edit: false })
  }

  return (
    <Container>
      <Warning 
        text={overlayText}
        cancel={toggleOverlay}
        confirm={handleConfirmOverlay}
        visible={visible}
      />
      <Head />
      <Scroll>
        <Content>
          <Title>REVISÃO</Title>
          <Intern>
            <Subtitle>Dados do Pedido</Subtitle>
            <Inline>
              <InlineTitle>Nome: </InlineTitle>
              <InlineText>{requirement.name}</InlineText>
            </Inline>
            <Inline>
              <InlineTitle>Produto: </InlineTitle>
              <InlineText>{requirement.product}</InlineText>
            </Inline>
            <Inline>
              <InlineTitle>Quantidade: </InlineTitle>
              <InlineText>{requirement.amount}</InlineText>
            </Inline>
            <InlineTitle>Razão da compra: </InlineTitle>
            <InlineText>{requirement.reason}</InlineText>
            <Subtitle>Dados da Compra</Subtitle>
            {Object.values(requirement.ways).map(way => {
              return (
                <Way key={way.id}>
                  <WayTitle>{way.id}ª Forma de Compra</WayTitle>
                  <Inline>
                    <InlineTitle>Empresa: </InlineTitle>
                    <InlineText>{way.company}</InlineText>
                  </Inline>
                  <Inline>
                    <InlineTitle>Contato: </InlineTitle>
                    <InlineText>{way.contact}</InlineText>
                  </Inline>
                  <Inline>
                    <InlineTitle>Preço Unitário: </InlineTitle>
                    <InlineText>R$ {way.unitaryPrice.toFixed(2)}</InlineText>
                  </Inline>
                  <Inline>
                    <InlineTitle>Taxa Correios: </InlineTitle>
                    <InlineText>R$ {way.correiosTax.toFixed(2)}</InlineText>
                  </Inline>
                </Way>
              )
            })}
            
            <Inline style={{marginTop: 28}}>
              <Inline style={{marginRight: "auto"}}>
                <ValueTitle>Valor: </ValueTitle>
                <ValueText>
                  R$ {requirement.value.toFixed(2)}
                </ValueText>
              </Inline>
              <Edit onPress={handleEdit}>
                <Icon name="edit" size={32} color={colors.primaryIcon}/>
                <EditText>Editar</EditText>
              </Edit>
            </Inline>

            <Inline>
              <Cancel 
                style={styles.button}
                onPress={handleCancel}
              >
                <ButtonText>Cancelar</ButtonText>
              </Cancel>
              <Confirm 
                style={styles.button}
                onPress={handleConfirm}
              >
                <ButtonText>Confirmar</ButtonText>
              </Confirm>
            </Inline>
          </Intern>
        </Content>
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
}})

export default Review;