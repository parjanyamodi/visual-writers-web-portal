import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyA_3FQwR_yFpYYEGcuijMBYR3R--ReNg3A",
  authDomain: "visual-writers-db.firebaseapp.com",
  projectId: "visual-writers-db",
  storageBucket: "visual-writers-db.appspot.com",
  messagingSenderId: "936244540662",
  appId: "1:936244540662:web:f166a46f133c0fc578a8d7",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
