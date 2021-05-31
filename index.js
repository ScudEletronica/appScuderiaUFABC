import { AppRegistry } from 'react-native';
import App from './src';
import { name as appName } from './app.json';
import messaging from '@react-native-firebase/messaging';

// Configura as notificações vindas quando o app não está aberto
messaging().setBackgroundMessageHandler(async remoteMessage => {
  console.log('Message handled in the background!', remoteMessage);
});

// Carrega o app
AppRegistry.registerComponent(appName, () => App);
