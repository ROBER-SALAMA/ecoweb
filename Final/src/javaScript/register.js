//imports
import 
{ auth }
from './firebaseConfig.js';

import 
{ createUserWithEmailAndPassword }
from 'https://www.gstatic.com/firebasejs/9.9.1/firebase-auth.js';

//ID INPUTS

export const sigUpForm = document.querySelector('#signup-form');

sigUpForm.addEventListener('submit',(event) => {
    event.preventDefault();
    
    const gmail = document.querySelector('#signup-gmail').value;
    const  password = document.querySelector('#signup-password').value;
    
// REGISTER USERS

    createUserWithEmailAndPassword(auth, gmail, password)
        .then ((userCredential) => {
        
            const email = userCredential.gmail;
            const pass = userCredential.password;
            
            // alert(`bienvenido a Eco Web ${userName}`);          
        }).then(function(){
            const userName = document.getElementById('signup-user').value;
            alert(`Bienvenido a Eco Web ${userName}`);

        }).then(function(){
            window.location.assign("./mapa.html");
        })

//ERRORS

        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;

            alert(errorMessage);
            alert(errorCode);
        }); 
});