import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB30On_jFOVuvHVfYQMvVsEjI-0hP5KqH4",
  authDomain: "codo-d756f.firebaseapp.com",
  projectId: "codo-d756f",
  storageBucket: "codo-d756f.appspot.com",
  messagingSenderId: "798704203382",
  appId: "1:798704203382:web:24a8c48162d1e97aca5157"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)