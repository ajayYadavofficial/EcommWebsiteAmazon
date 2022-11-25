import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyByki8eQ1Pb_WUOJy7wXS_tjZPjUjbNclY",
  authDomain: "e-clone-app-1f29a.firebaseapp.com",
  projectId: "e-clone-app-1f29a",
  storageBucket: "e-clone-app-1f29a.appspot.com",
  messagingSenderId: "12164521396",
  appId: "1:12164521396:web:1fbcad33bbc729d3a026e1",
  measurementId: "G-T6X8PFBR3K",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { db, auth };
