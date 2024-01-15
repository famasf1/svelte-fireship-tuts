import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAG26jIaL3KwqteGdkZBaXeCNAPbSHBHE0",
    authDomain: "svelte-core-fireship.firebaseapp.com",
    projectId: "svelte-core-fireship",
    storageBucket: "svelte-core-fireship.appspot.com",
    messagingSenderId: "316478102303",
    appId: "1:316478102303:web:222196b8ae332827b8ee2a",
    measurementId: "G-8WWX043BGY"
  };

export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export const auth = getAuth();
export const storage = getStorage();