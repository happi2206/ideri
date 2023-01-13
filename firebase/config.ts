// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyARrtgQeoe_9nze0bm4vi8I0S3uZUTRBV4',
  authDomain: 'ideri-37de6.firebaseapp.com',
  projectId: 'ideri-37de6',
  storageBucket: 'ideri-37de6.appspot.com',
  messagingSenderId: '521515230483',
  appId: '1:521515230483:web:acaac49c72bc4fd71ce6e6',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
