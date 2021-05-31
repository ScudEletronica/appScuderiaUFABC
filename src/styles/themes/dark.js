import ScudHeader from '~/assets/ScudHeaderDark.png'
import Capacete from '~/assets/CapaceteDark.png'
import Login from '~/assets/LoginDark.png'
import Key from '~/assets/KeyDark.png'

export default {
  title: "dark",

  // Padrões de cores quando o app está no tema escuro
  colors: {
    title: '#37BF65',
    background: '#222',
    fill: '#3D3D3D',
    
    inputFill: '#3D3D3D',
    inputText: '#969696',

    primaryText: '#FFF',
    secondaryText: '#B7B7B7',
    tertiaryText: '#FFF',
    quaternaryText: '#FFF',

    primaryIcon: '#FFF',
    secondaryIcon: '#FFF',
    tertiaryIcon: '#FFF',

    back: '#FFF',

    primaryButton: '#FFF',
    secondaryButton: '#3D3D3D',
    tertiaryButton: '#3D3D3D',
    buttonText: '#222',
  },

  // Padrões de imagens quando o app está no tema claro
  images: {
    header: ScudHeader,
    capacete: Capacete,
    login: Login,
    key: Key,
  }
}