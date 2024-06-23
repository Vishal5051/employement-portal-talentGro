import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyD1imqKQjACMeYby3QvGs-kQ_DervSbBPs",
  authDomain: "talentgro-ae2d3.firebaseapp.com",
  projectId: "talentgro-ae2d3",
  storageBucket: "talentgro-ae2d3.appspot.com",
  messagingSenderId: "504093763527",
  appId: "1:504093763527:web:733368d3660f3f92c11be2",
  measurementId: "G-Y4YLPB6Z36"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, signInWithPopup };