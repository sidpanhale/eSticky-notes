import firebase from "firebase";

const firebaseApp = firebase.initializeApp ({
    apiKey: "AIzaSyD8zVxFZRrijsuAMKrKMLB56HIlHFtCYEs",
    authDomain: "esticky-notes.firebaseapp.com",
    projectId: "esticky-notes",
    storageBucket: "esticky-notes.appspot.com",
    messagingSenderId: "865801366269",
    appId: "1:865801366269:web:760d44e0fa425226fdac94",
    measurementId: "G-WL1L5VSVB7"
});
  
const db = firebaseApp.firestore();
  
export default db ;  
