import { initializeApp } from 'firebase/app';
const firebaseConfig = {
    apiKey: "AIzaSyBmQu5eXdhLf_4nEWILclPpuHKkHtQ6Q40",
    authDomain: "orcsandelves-3fb4d.firebaseapp.com",
    databaseURL: "https://orcsandelves-3fb4d-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "orcsandelves-3fb4d",
    storageBucket: "orcsandelves-3fb4d.appspot.com",
    messagingSenderId: "899562905668",
    appId: "1:899562905668:web:e91f81d16a4b19f8109c11"
};
export const firebase = initializeApp(firebaseConfig);