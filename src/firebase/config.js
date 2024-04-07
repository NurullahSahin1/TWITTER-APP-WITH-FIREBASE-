import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';
import { getStorage } from "firebase/storage";


const firebaseConfig = {
    apiKey: "AIzaSyALXbpS8KXzL-MmrmL5FVX1XQnWR7EOh8E",
    authDomain: "twitter-1e10f.firebaseapp.com",
    projectId: "twitter-1e10f",
    storageBucket: "twitter-1e10f.appspot.com",
    messagingSenderId: "32222817179",
    appId: "1:32222817179:web:3fe89d57434449af490f3e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// firebase auth'un referansını alma
export const auth = getAuth(app);

// google sağlayıcısını kurma
export const provider = new GoogleAuthProvider();

// veritabanının referasnını alma
export const db = getFirestore(app);

// dosya yüklme alanın referansını alma
export const storage = getStorage(app);

