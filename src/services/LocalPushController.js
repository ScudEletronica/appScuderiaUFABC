import PushNotification from 'react-native-push-notification'

PushNotification.configure({
  // (required) Called when a remote or local notification is opened or received
  onNotification: function(notification) {
    console.log('LOCAL NOTIFICATION ==>', notification)
  },
  popInitialNotification: true,
  requestPermissions: true,
  permissions: {
    alert: true,
    badge: true,
    sound: true,
  },
})

export const LabNotification = (status) => {
  if (status) {
    PushNotification.localNotification({
      bigText:
        'O Lab da ScuderiaUFABC está aberto',
      subText: 'Lab Aberto',
      title: 'Lab Aberto',
      message: 'Lab Aberto',
      vibrate: true,
      vibration: 300,
      foreground: true
    })
  } else {
    PushNotification.localNotification({
      bigText:
        'O Lab da ScuderiaUFABC está fechado',
      subText: 'Lab Fechado',
      title: 'Lab Fechado',
      message: 'Lab Fechado',
      vibrate: true,
      vibration: 300,
      foreground: true
    })
  }
}

export const LabRequestNotification = () => {
  PushNotification.localNotification({
    bigText:
      'Alguém solicitou que o Lab fosse aberto',
    subText: 'Lab Requisitado',
    title: 'Lab Requisitado',
    message: 'Lab Requisitado',
    vibrate: true,
    vibration: 300,
    foreground: true
  })
}

export const WorkshopNotification = (status) => {
  if (status) {
    PushNotification.localNotification({
      bigText:
        'A Oficina da ScuderiaUFABC está aberta',
      subText: 'Oficina Aberta',
      title: 'Oficina Aberta',
      message: 'Oficina Aberta',
      vibrate: true,
      vibration: 300,
      foreground: true
    })
  } else {
    PushNotification.localNotification({
      bigText:
        'A Oficina da ScuderiaUFABC está Fechada',
      subText: 'Oficina Fechada',
      title: 'Oficina Fechada',
      message: 'Oficina Fechada',
      vibrate: true,
      vibration: 300,
      foreground: true
    })
  }
}

export const WorkshopRequestNotification = () => {
    PushNotification.localNotification({
    bigText:
      'Alguém solicitou que a Oficina fosse aberta',
    subText: 'Oficina Requisitada',
    title: 'Oficina Requisitada',
    message: 'Oficina Requisitada',
    vibrate: true,
    vibration: 300,
    foreground: true
  })
}

export const MessageNotification = () => {
  PushNotification.localNotification({
    bigText:
      'Um novo recado foi adicionado',
    subText: 'Novo Recado',
    title: 'Novo Recado',
    message: 'Novo Recado',
    vibrate: true,
    vibration: 300,
    foreground: true
  })
}

export const PendingNotification = () => {
  PushNotification.localNotification({
    bigText:
      'Uma nova requisição foi adicionada',
    subText: 'Nova Requisição',
    title: 'Nova Requisição',
    message: 'Nova Requisição',
    vibrate: true,
    vibration: 300,
    foreground: true
  })
}

export const AcceptNotification = () => {
  PushNotification.localNotification({
    bigText:
      'Uma de suas requisições foi aceita',
    subText: 'Requisição Aceita',
    title: 'Requisição Aceita',
    message: 'Requisição Aceita',
    vibrate: true,
    vibration: 300,
    foreground: true
  })
}