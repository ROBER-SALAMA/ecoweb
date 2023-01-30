// maybe hay que meter el server junto a este codigo de qui xd :D

import {button} from './login.js'

import
{ auth }
from './firebaseConfig.js';

import 
{ onAuthStateChanged } 
from 'https://www.gstatic.com/firebasejs/9.9.1/firebase-auth.js';

button.addEventListener('submit',
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user.uid);
    }
  })
)