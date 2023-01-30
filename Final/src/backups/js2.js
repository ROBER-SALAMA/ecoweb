//imports
import 
{ initializeApp }
from 'https://www.gstatic.com/firebasejs/9.9.1/firebase-app.js';

import 
{ getAuth, createUserWithEmailAndPassword, onAuthStateChanged } 
from 'https://www.gstatic.com/firebasejs/9.9.1/firebase-auth.js';

import
{ getDatabase, ref, set } 
from 'https://www.gstatic.com/firebasejs/9.9.1/firebase-database.js'

//------USE STRICT------//

export const firebaseApp = initializeApp({
    apiKey: "AIzaSyB3hHUfVRcWo_a4cbg7gyh7tY67JUIECaQ",
    authDomain: "eco-wallet-6ecf7.firebaseapp.com",
    databaseURL: "https://eco-wallet-6ecf7-default-rtdb.firebaseio.com",
    projectId: "eco-wallet-6ecf7",
    storageBucket: "eco-wallet-6ecf7.appspot.com",
    messagingSenderId: "139432272671",
    appId: "1:139432272671:web:71fd129d3c31f0e996c62a",
    databaseURL: "https://eco-wallet-6ecf7-default-rtdb.firebaseio.com/"
});

const auth = getAuth(firebaseApp);

// IF USER IS LOGGED, SHOW:

onAuthStateChanged (auth, user => {
    if (user === null) {
        console.log("No user");
    } else {    
        console.log("user is logged in");
    }
});

//ID INPUTS

const sigUpForm = document.querySelector('#signup-form');

sigUpForm.addEventListener('submit',(event, writeUserData) => {
    event.preventDefault();

   // const user = document.querySelector('#signup-user').value;
    const gmail = document.querySelector('#signup-gmail').value;
    const  password = document.querySelector('#signup-password').value;

// REGISTER USERS

    createUserWithEmailAndPassword(auth, gmail, password)
        .then((userCredential) => {
            // Signed in
           // const userName = userCredential.user;
            const email = userCredential.gmail;
            const pass = userCredential.password;
            
            alert("registrado correctamente!");          
        })

//ERRORS

        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;

            alert(errorMessage);
            alert(errorCode);
            // ..
        }); 
        
});

function writeUserData (event, user) {
    event.preventDefault();
    
    user = document.getElementById('signup-user').value;
    //gmail = document.getElementById('signup-gmail').value;
    //password = document.getElementById('signup-password').value;

    const db = getDatabase(firebaseApp);
    set(ref(db, 'Users'), {
      userName: user
      //Gmail: gmail,
      //password: password
    });

    //ALERTS
    console.log("guardado");
    alert("bienvenido a firebase " + user);
    
};