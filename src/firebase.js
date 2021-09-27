import firebase from 'firebase/app';
import 'firebase/analytics';
import "firebase/auth";
import "firebase/firestore";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBlRK0mLxYm4cDqI7V-IYlKX9Cw_YT3iQ4",
    authDomain: "improv-manager.firebaseapp.com",
    projectId: "improv-manager",
    storageBucket: "improv-manager.appspot.com",
    messagingSenderId: "972199129568",
    appId: "1:972199129568:web:b93de6cda6c3b0c3af7b85",
    measurementId: "G-SGT3V0D3YB"
};

firebase.initializeApp(firebaseConfig);