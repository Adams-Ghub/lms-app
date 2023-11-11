import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBFcjrHYqrXifi-lgAHeFS5zU53DqO2Gwc',
  authDomain: 'lms-app-25ddf.firebaseapp.com',
  projectId: 'lms-app-25ddf',
  storageBucket: 'lms-app-25ddf.appspot.com',
  messagingSenderId: '401447861494',
  appId: '1:401447861494:web:f4bff5b7f9432e340e40d7',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
