import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
        apiKey: "AIzaSyDo6jxjfEjc7dUPL0HDtOvhXgR0G9woFwg",
        authDomain: "facebook-clone-3fac8.firebaseapp.com",
        projectId: "facebook-clone-3fac8",
        storageBucket: "facebook-clone-3fac8.appspot.com",
        messagingSenderId: "960939250205",
        appId: "1:960939250205:web:df0b6ad792c43cb293ecf4",
        measurementId: "G-BKZCJJMGQY"
    };


    const firebaseApp = firebase.initializeApp(firebaseConfig);
    const db = firebaseApp.firestore();
    const auth = firebase.auth();
    const provider = new firebase.auth.GoogleAuthProvider();



    export {auth, provider};
    export default db;