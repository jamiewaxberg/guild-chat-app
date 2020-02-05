// This file initializes the Firebase database

import * as firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDGT3qQa-brMROyi0wxdaFPao2Yo9XmMGs",
    authDomain: "guild-chat-app.firebaseapp.com",
    databaseURL: "https://guild-chat-app.firebaseio.com",
    projectId: "guild-chat-app",
    storageBucket: "guild-chat-app.appspot.com",
    messagingSenderId: "989822746315",
    appId: "1:989822746315:web:d16c3ebb698c87f133254e"
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();
export const databaseRef = database.ref("/");
