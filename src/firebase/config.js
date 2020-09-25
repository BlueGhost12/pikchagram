import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyCpdidgKHNO94D5B2Dt7S6UlL_0nsfRKPg",
    authDomain: "pikchagram.firebaseapp.com",
    databaseURL: "https://pikchagram.firebaseio.com",
    projectId: "pikchagram",
    storageBucket: "pikchagram.appspot.com",
    messagingSenderId: "19630441846",
    appId: "1:19630441846:web:5a6b2d044ecb121fa02657",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };