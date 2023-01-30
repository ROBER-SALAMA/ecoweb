import { auth } from '../javaScript/firebaseConfig.js';

import { onAuthStateChanged }
from 'https://www.gstatic.com/firebasejs/9.9.1/firebase-auth.js';

var uid = document.getElementById('signUp-button');

uid.addEventListener('click', 
onAuthStateChanged(auth, (user) => {
	if (user) {
	  const uid = user.uid;
	  console.log(uid);
	} else {
	  console.log("not user");
	}
  })
)

export default uid;