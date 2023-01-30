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
});