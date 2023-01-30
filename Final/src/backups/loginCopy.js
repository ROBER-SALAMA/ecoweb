import
{ auth }
from './firebaseConfig.js';

import 
{ signInWithEmailAndPassword }
from 'https://www.gstatic.com/firebasejs/9.9.1/firebase-auth.js';

export const button = document.querySelector('#button-signin');  // export to statuschange

    button.addEventListener('click', (event) => {
        event.preventDefault();

    // const user = document.getElementById("signin-user").value;
        const gmail = document.getElementById("signin-gmail").value;
        const password = document.getElementById("signin-password").value;

    signInWithEmailAndPassword(auth, gmail, password)
        .then((userCredential) => {
            // const gmail = userCredential.gmail;
            // const password = userCredential.user;

            console.log(gmail);
            console.log(password);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;

            alert("contraseña incorrecta");

            console.log(errorCode);
            console.log(errorMessage);
        });
    },

);
