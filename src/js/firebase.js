// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCzHMdT5AL9RsMhfageCwF_oyQ-rsduRYM",
  authDomain: "cafelavista.firebaseapp.com",
  projectId: "cafelavista",
  storageBucket: "cafelavista.appspot.com",
  messagingSenderId: "397297231934",
  appId: "1:397297231934:web:0bea72400bc933e7b3896f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {
    db
}
