import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBdi15nKXot-OyZhAUvolRB2xZY-BgQZ6Y",
    authDomain: "mahata-purba-para-fp-school.firebaseapp.com",
    databaseURL: "https://mahata-purba-para-fp-school-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "mahata-purba-para-fp-school",
    storageBucket: "mahata-purba-para-fp-school.appspot.com",
    messagingSenderId: "923187616908",
    appId: "1:923187616908:web:4aec245b388a6e21dcafa9",
    measurementId: "G-HRE6W5NEJ2"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


// export { app,db };