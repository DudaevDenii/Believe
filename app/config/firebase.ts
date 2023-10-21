import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyC1gsGvs3Ho2NFu3YYtXGCfCQQTKr41PPc",
  authDomain: "believe-e46d3.firebaseapp.com",
  projectId: "believe-e46d3",
  storageBucket: "believe-e46d3.appspot.com",
  messagingSenderId: "434446788285",
  appId: "1:434446788285:web:6df397b14be5d71655f9d4",
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
