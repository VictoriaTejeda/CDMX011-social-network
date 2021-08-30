// Import the functions you need from the SDKs you need
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDSaXoR1ArRIBHGbvf0tn-YAQEQxAMCwTI',
  authDomain: 'boo-alma.firebaseapp.com',
  projectId: 'boo-alma',
  storageBucket: 'boo-alma.appspot.com',
  messagingSenderId: '657023452499',
  appId: '1:657023452499:web:d079f13cd25d27eeb9cda6',
  measurementId: 'G-ENLHQEKXEN',
};

export const fireBase = () => {
  initializeApp(firebaseConfig);
};
