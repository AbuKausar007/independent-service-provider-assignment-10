// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZH-hSkuK9fyoe_o83B6NuR2Kjq7TMlBw",
  authDomain: "independent-service-prov-90dee.firebaseapp.com",
  projectId: "independent-service-prov-90dee",
  storageBucket: "independent-service-prov-90dee.appspot.com",
  messagingSenderId: "111991435656",
  appId: "1:111991435656:web:31baa526db039e13fcca3d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
