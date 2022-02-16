import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC1smz0qEJnPF3JV81WIhtn0sIbIjGTNP4",
authDomain: "work-me-fe26d.firebaseapp.com",
databaseURL: "https://work-me-fe26d-default-rtdb.firebaseio.com",
projectId: "work-me-fe26d",
storageBucket: "work-me-fe26d.appspot.com",
messagingSenderId: "920572381921",
appId: "1:920572381921:web:911b24c9f853bc9d5e85a0"
    
};

 
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
