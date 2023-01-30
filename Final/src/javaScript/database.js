import 
{ db }
from './firebaseConfig.js';

import 
{ ref, set }
from 'https://www.gstatic.com/firebasejs/9.9.1/firebase-database.js'

// GET ID FROM BUTTON

const button = document.querySelector('#signUp-button');

button.addEventListener('click', function writeUserData(event, user) {
	event.preventDefault();

	user = document.getElementById('signup-user').value;

	set(ref(db, 'Users'), {
		userName: user,
		Gmail: gmail,
		password: password
	});

	console.log("guardado");
	alert("bienvenido a firebase " + user);

});