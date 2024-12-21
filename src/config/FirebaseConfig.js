// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAUc7JPMiyqTUw9qdGN0D-7k59U9Xia_g4",
  authDomain: "book-web-32014.firebaseapp.com",
  projectId: "book-web-32014",
  storageBucket: "book-web-32014.appspot.com",
  messagingSenderId: "499892054258",
  appId: "1:499892054258:web:b58c7b1ae308295d8d486b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const txtDB = getFirestore(app)

export {storage, txtDB};