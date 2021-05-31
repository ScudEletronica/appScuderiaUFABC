import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import Icon from 'react-native-vector-icons/Fontisto'
import Icon2 from 'react-native-vector-icons/AntDesign'

import { 
  Container, Save, Content, Avatar, Options, Option, OptionText, ChangePhoto
} from './styles';

// Pagina de mudança da foto de perfil
const ChangeAvatar = () => {
  const { colors } = useContext(ThemeContext);

  return (
    <Container>
        <Content>
          <Save>
            <Icon name="save" size={40}/>
          </Save>
          <Avatar source={require('../../assets/Avatar.png')}/>
          {/* Opções de editar e mudar a foto */}
          <Options>
            <Option>
              <Icon2 name="edit" size={27} color={colors.primaryIcon}/>
              <OptionText>Editar</OptionText>
            </Option>
            <Option>
              <ChangePhoto source={require('../../assets/ChangePhoto.png')}/>
              <OptionText>Mudar</OptionText>
            </Option>
          </Options>
        </Content>
    </Container>
  );
}

export default ChangeAvatar;