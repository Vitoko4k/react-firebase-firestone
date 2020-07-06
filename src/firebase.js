import firebase from 'firebase/app'
import 'firebase/firestore'
// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyD1-n9vLlgBiK4hhUR0gsh294I7soaxDdo",
    authDomain: "fb-crud-react-6753f.firebaseapp.com",
    databaseURL: "https://fb-crud-react-6753f.firebaseio.com",
    projectId: "fb-crud-react-6753f",
    storageBucket: "fb-crud-react-6753f.appspot.com",
    messagingSenderId: "672008872246",
    appId: "1:672008872246:web:ab2cdb7fec98f74fa99397"
  };
  // Initialize Firebase
  const fb = firebase.initializeApp(firebaseConfig);

  export const db = fb.firestore();

