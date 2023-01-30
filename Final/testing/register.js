//imports
const 
{getAuth, createUserWithEmailAndPassword }
from 'firebase/auth';


//ID INPUTS

const sigUpForm = document.querySelector('#signup-form');

sigUpForm.addEventListener('submit',(event) => {
    event.preventDefault();

    const gmail = document.querySelector('#signup-gmail').value;
    const  password = document.querySelector('#signup-password').value;
    
// REGISTER USERS

    createUserWithEmailAndPassword(getAuth, gmail, password)
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