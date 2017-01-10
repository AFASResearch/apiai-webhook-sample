import * as admin from 'firebase-admin';
import {app, database} from 'firebase';

// Not in source control
let serviceAccount = require('./nai-body-key.json');

let onerror = (error: any) => {
  console.error(error);
};

let fbapp = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: `https://${serviceAccount.project_id}.firebaseio.com`
}) as Object as app.App;

console.log('connecting...');
fbapp.database().ref('webhook')
  .onDisconnect().remove()
  .then(() => {
    return fbapp.database().ref('webhook').set({
      registered: true,
      since: database.ServerValue.TIMESTAMP
    })
  }).then(() => {
    console.log('connection registered');
    // start watching
  }).catch(onerror);

export let bodyProxy = {
  log: () => {
    console.log('log');
  }
}