import
{ initializeApp }
from 'https://www.gstatic.com/firebasejs/9.9.1/firebase-app.js';

import
{ getAuth }
from 'https://www.gstatic.com/firebasejs/9.9.1/firebase-auth.js';

import 
{ getDatabase }
from 'https://www.gstatic.com/firebasejs/9.9.1/firebase-database.js';

const firebaseApp = initializeApp({
    apiKey: "AIzaSyDLCGJn_YRKpaisi3mSmlL6_Dw3PuB7Hws",
    authDomain: "ecoweb-9727b.firebaseapp.com",
    projectId: "ecoweb-9727b",
    storageBucket: "ecoweb-9727b.appspot.com",
    messagingSenderId: "933985339105",
    appId: "1:933985339105:web:b15ce02d95d4e8a89299a0"
});

export const auth = getAuth(firebaseApp);

export const db = getDatabase(firebaseApp);