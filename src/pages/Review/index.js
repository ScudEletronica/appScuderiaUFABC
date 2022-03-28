import React, { useContext, useState } from 'react';
import { StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from 'styled-components';
import Icon from 'react-native-vector-icons/AntDesign'
import database from '@react-native-firebase/database'

import { 
  Title, Subtitle, Intern, Inline, InlineTitle, InlineText, ValueTitle, ValueText, Edit, EditText, Cancel, Confirm, ButtonText, Way, WayTitle
} from './styles';

import {
  Container, Scroll, Content
} from '~/styles/global'

import Warning from '~/components/Warning';

const reference = database().ref('Requirements');

// Revisão da requisição 
const Review = ({ route }) => {
  const [overlayText, setOverlayText] = useState(''); // Define a mensagem do aviso
  const [visible, setVisible] = useState(false); // Visibilidade do recado
  const [confirm, setConfirm] = useState(false); // Define o tipo de operação

  const { navigate } = useNavigation();
  const { requirement, edit } = route.params;
  const { colors } = useTheme();

  // Alterna a visibilidade do Aviso
  function toggleOverlay() {
    setVisible(!visible);
  }

  // Pergunta se usuário deseja cancelar sua ação
  function handleCancel() {
    setOverlayText("Deseja mesmo voltar? Dessa forma irá perder os dados já preenchidos");
    setConfirm(false)
    toggleOverlay();
  }
  
  // Ações de confirmação de edição ou realização da requisição
  function handleConfirm() {
    setConfirm(true);
    edit
    ? setOverlayText("Certeza que quer editar essa requisição?")
    : setOverlayText("Certeza que quer fazer essa requisição?");
    toggleOverlay()
  }
  
  // Escolhe as opções de ação conforme o valor de confirm e edit
  function handleConfirmOverlay() {
    confirm
    ? edit
      ? handleUpdate()
      : handleNew()
    : cancel()
  }

  // Cancelamento da requisição
  function cancel() {
    setVisible(false);
    navigate('MyRequirements')
  }

  // Cria uma nova requisição
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

    setVisible(false);
    navigate('MyRequirements')
  }

  // Atualiza uma requisição
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
  
  // Navega para pagina de edição
  function handleEdit() {
    navigate('NewRequirement', { requirement, edit})
  }

  // Modelo de informações na mesma linha
  const InlineTemplate = ({name, value}) => (
    <Inline>
      <InlineTitle>{name}: </InlineTitle>
      <InlineText>{value}</InlineText>
    </Inline>
  )

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
          <Title>REVISÃO</Title>
          <Intern>
            <Subtitle>Dados do Pedido</Subtitle>
            <InlineTemplate name="Nome" value={requirement.name} />
            <InlineTemplate name="Produto" value={requirement.product} />
            <InlineTemplate name="Quantidade" value={requirement.amount} />

            <InlineTitle>Razão da compra: </InlineTitle>
            <InlineText>{requirement.reason}</InlineText>

            <Subtitle>Dados da Compra</Subtitle>
            {Object.values(requirement.ways).map(way => (
              <Way key={way.id}>
                <WayTitle>{way.id}ª Forma de Compra</WayTitle>
                <InlineTemplate name="Empresa" value={way.company} />
                <InlineTemplate name="Contato" value={way.contact} />
                <InlineTemplate 
                  name="Preço Unitário" value={`R$ ${way.unitaryPrice.toFixed(2)}`} 
                />
                <InlineTemplate 
                  name="Taxa Correios" value={`R$ ${way.correiosTax.toFixed(2)}`} 
                />
              </Way>
            ))}
            
            <Inline style={{marginTop: 28}}>

              {/* Valor Final */}
              <Inline style={{marginRight: "auto"}}>
                <ValueTitle>Valor: </ValueTitle>
                <ValueText>
                  R$ {requirement.value.toFixed(2)}
                </ValueText>
              </Inline>

              {/* Botão de edição */}
              <Edit onPress={handleEdit}>
                <Icon name="edit" size={32} color={colors.primaryIcon}/>
                <EditText>Editar</EditText>
              </Edit>
            </Inline>

            <Inline>
              {/* Botão para cancelar */}
              <Cancel 
                style={styles.button}
                onPress={handleCancel}
              >
                <ButtonText>Cancelar</ButtonText>
              </Cancel>

              {/* Botão para confirmar */}
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