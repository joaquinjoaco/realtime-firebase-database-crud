import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
     apiKey: "AIzaSyBD3-76bWxpTfhEbIWY_1CbW2aDWeOzXlQ",
     authDomain: "fir-realtime-151fd.firebaseapp.com",
     projectId: "fir-realtime-151fd",
     storageBucket: "fir-realtime-151fd.appspot.com",
     messagingSenderId: "566306710302",
     appId: "1:566306710302:web:6acd1c13d8f46e691b1f0f",
     measurementId: "G-W4Y36T7662"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);