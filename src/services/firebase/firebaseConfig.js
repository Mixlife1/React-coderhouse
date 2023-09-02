import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDIqaTXmjUqEi1hOjtZNjiv6_6A_fyqNac",
  authDomain: "proyecto-final-5fd91.firebaseapp.com",
  projectId: "proyecto-final-5fd91",
  storageBucket: "proyecto-final-5fd91.appspot.com",
  messagingSenderId: "922662473605",
  appId: "1:922662473605:web:44900fec9d467e5238beec"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)