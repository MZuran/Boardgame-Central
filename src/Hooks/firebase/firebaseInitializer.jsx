// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { useEffect } from "react";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDvZ2_Qp89A60DuHnO86xqcRkDx0dARLA0",
  authDomain: "boardgame-central.firebaseapp.com",
  projectId: "boardgame-central",
  storageBucket: "boardgame-central.appspot.com",
  messagingSenderId: "603713952191",
  appId: "1:603713952191:web:abffb9c914b4b06986e90a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// React component that initializes Firebase on import
const FirebaseInitializer = () => {
  useEffect(() => {
    //console.log("Component Mounted", app)
    return () => {
      //console.log("Component Unmounted")
    };
  }, []); 

  return null;
};

export default FirebaseInitializer;