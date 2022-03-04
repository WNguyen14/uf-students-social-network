// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBljqnzY3XdsM7YhlLDCHxXDndSCU1oBR0",
  authDomain: "uf-students-social-network.firebaseapp.com",
  projectId: "uf-students-social-network",
  storageBucket: "uf-students-social-network.appspot.com",
  messagingSenderId: "400852459940",
  appId: "1:400852459940:web:b26f3fa5a2f6f89611e131",
  measurementId: "G-JS0FC5E1RT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();

export function signup(email,passowrd){
  return createUserWithEmailAndPassword(auth, email,passowrd);
}

export function login(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

export function logout() {
  return signOut(auth);
}


