import
{ auth }
from '../src/javaScript/firebaseConfig.js';

import 
{ signInWithEmailAndPassword }
from 'https://www.gstatic.com/firebasejs/9.9.1/firebase-auth.js';

export const button = document.querySelector('#button-signin');  // export to statuschange

    button.addEventListener('click', (event) => {
        event.preventDefault();

        const gmail = document.getElementById("signin-gmail").value;
        const password = document.getElementById("signin-password").value;

    signInWithEmailAndPassword(auth, gmail, password)
        .then((userCredential) => {

            console.log(gmail);
            console.log(password);

            window.location.assign("./home.html");
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;

            alert("contraseña incorrecta");

            console.log(errorCode);
            console.log(errorMessage);
        })   
    }
);
/*
button.addEventListener('submit',
  onAuthStateChanged(auth, (gmail, password) => {
    if (gmail, password === null) {
      console.log("No user");
  } else {    
      console.log("user is: ");
  }
  })
)
*/