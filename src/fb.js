import firebase from'firebase/app'
import 'firebase/firestore'

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBGRqk8pOYO9l7NDjUKrt_d47HZSwLo5m8",
    authDomain: "to-do-a6ec9.firebaseapp.com",
    databaseURL: "https://to-do-a6ec9.firebaseio.com",
    projectId: "to-do-a6ec9",
    storageBucket: "to-do-a6ec9.appspot.com",
    messagingSenderId: "268136597586"
  };
  firebase.initializeApp(config);

  const db=firebase.firestore();

//   db.settings({timestampsInSnapshots: true});

  export default db;