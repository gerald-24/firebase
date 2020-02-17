import Firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyBX2wv81FquoVcczQVplYHU1nLqRPTpEPo",
    authDomain: "myfirstvuefire.firebaseapp.com",
    databaseURL: "https://myfirstvuefire.firebaseio.com",
    projectId: "myfirstvuefire",
    storageBucket: "myfirstvuefire.appspot.com",
    messagingSenderId: "1080335116911",
    appId: "1:1080335116911:web:f4ca0bbb34d286c0f6bb9a",
    measurementId: "G-T74WJ7D2Z2"
  };
let app = Firebase.initializeApp(firebaseConfig)
export const db = app.database()