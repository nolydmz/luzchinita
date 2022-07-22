
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD13hv2YT1jZhyxkHqekcn-VV-D24Ta5Lo",
  authDomain: "luzchinita-919df.firebaseapp.com",
  projectId: "luzchinita-919df",
  storageBucket: "luzchinita-919df.appspot.com",
  messagingSenderId: "344790398409",
  appId: "1:344790398409:web:c676f937054fc7de286418"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);