// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDMA3AfCBcn3OG8JbmSTUos28elRV5Ccvo",
  authDomain: "netflix-clone-bba8f.firebaseapp.com",
  projectId: "netflix-clone-bba8f",
  storageBucket: "netflix-clone-bba8f.appspot.com",
  messagingSenderId: "939397834491",
  appId: "1:939397834491:web:00b6589e82edc478d2f25e",
  measurementId: "G-7CH11HS5EQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const firebaseAuth = getAuth(app);