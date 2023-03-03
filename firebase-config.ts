import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

export const firebaseConfig = {
  apiKey: "AIzaSyD6JbG96l0PlOfFzEJNsocI914bTlBCaz4",
  authDomain: "app-mentalize.firebaseapp.com",
  projectId: "app-mentalize",
  storageBucket: "app-mentalize.appspot.com",
  messagingSenderId: "631011594813",
  appId: "1:631011594813:web:6248800e5a9c1d5eb35054",
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
