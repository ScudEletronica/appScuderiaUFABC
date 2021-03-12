const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

exports.LabOpen = functions.database.ref('/Status/Lab')
.onUpdate((change) => {
  const after = change.after.val();

  var payload;

  if (after === true) {
    payload = {
      notification: {
        title: 'Lab Aberto',
        body: 'O Laboratório da Scuderia UFABC foi aberto'
      }
    };
  } else {
    payload = {
      notification: {
        title: 'Lab Fechado',
        body: 'O Laboratório da Scuderia UFABC foi fechado'
      }
    };
  }
  return admin.messaging().sendToTopic("Lab", payload);
})

exports.WorkshopOpen = functions.database.ref('/Status/Workshop')
.onUpdate((change) => {
  const after = change.after.val();

  var payload;

  if (after === true) {
    payload = {
      notification: {
        title: 'Oficina Aberta',
        body: 'A Oficina da Scuderia UFABC foi aberta'
      }
    };
  } else {
    payload = {
      notification: {
        title: 'Oficina Fechada',
        body: 'A Oficina da Scuderia UFABC foi fechada'
      }
    };
  }
  return admin.messaging().sendToTopic("Workshop", payload);
})

exports.LabRequest = functions.database.ref('/Status/labRequest')
.onUpdate((change) => {
  const after = change.after.val();

  if (after === true) {
    const payload = {
      notification: {
        title: 'Lab Requisitado',
        body: 'Alguém solicitou que o Lab fosse aberto'
      }
    };
    return admin.messaging().sendToTopic("Request", payload);
  } 
  return null;
})

exports.WorkshopRequest = functions.database.ref('/Status/workshopRequest')
.onUpdate((change) => {
  const after = change.after.val();

  if (after === true) {
    const payload = {
      notification: {
        title: 'Oficina Requisitada',
        body: 'Alguém solicitou que a Oficina fosse aberta'
      }
    };
    return admin.messaging().sendToTopic("Request", payload);
  } 

  return null;
})

exports.NewMessage = functions.database.ref('/Messages/{messageId}')
.onCreate(() => {
  
  const payload = {
    notification: {
      title: 'Novo Recado',
      body: 'Um novo recado foi adicionado'
    }
  };

  return admin.messaging().sendToTopic("Message", payload);
})

exports.NewRequirement = functions.database.ref('/Requirements/{requirementId}')
.onCreate(() => {
  
  const payload = {
    notification: {
      title: 'Nova Requisição',
      body: 'Uma nova requisição foi adicionada'
    }
  };

  return admin.messaging().sendToTopic("Requirement", payload);
})