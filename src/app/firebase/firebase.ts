import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAAQWdmtJd-nP327cNPR7andItm99AO1CY",
  authDomain: "task-teste.firebaseapp.com",
  projectId: "task-teste",
  storageBucket: "task-teste.firebasestorage.app",
  messagingSenderId: "440328023057",
  appId: "1:440328023057:web:b252b1c81ef25b14d1d5b0"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };