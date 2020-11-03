import PushNotification from 'react-native-push-notification'

PushNotification.configure({
  // (required) Called when a remote or local notification is opened or received
  onNotification: function(notification) {
    console.log('LOCAL NOTIFICATION ==>', notification)
  },
  popInitialNotification: true,
  requestPermissions: true
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
    })
  }
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
    })
  }
}