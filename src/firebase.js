import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCDmvfIN9rb7UVxOJm11w5aKjxU6Ciihtw",
  authDomain: "chat-app-9a2dc.firebaseapp.com",
  projectId: "chat-app-9a2dc",
  storageBucket: "chat-app-9a2dc.appspot.com",
  messagingSenderId: "704681508613",
  appId: "1:704681508613:web:42aab12ecadbb6d427016c",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };
