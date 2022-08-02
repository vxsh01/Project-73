import firebase from "firebase";
require("@firebase/firestore");

var firebaseConfig = {
  apiKey: "AIzaSyBygxv9TnucKR4-t6X2y7coXAQZBFVMFgo",
  authDomain: "project-71-c576d.firebaseapp.com",
  projectId: "project-71-c576d",
  storageBucket: "project-71-c576d.appspot.com",
  messagingSenderId: "882162248367",
  appId: "1:882162248367:web:4d65b3916de8a8297e825a"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
