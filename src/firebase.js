import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  
    apiKey: "AIzaSyAQnvUxd61rjp-NGJhInh6YuqkkuhitDMc",
    authDomain: "azazon-clone.firebaseapp.com",
    projectId: "azazon-clone",
    storageBucket: "azazon-clone.appspot.com",
    messagingSenderId: "97593450217",
    appId: "1:97593450217:web:1e802d5ee903f85767da78"

  };

  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth=firebase.auth();

  export {db,auth}


  