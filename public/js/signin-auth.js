// login
const loginForm = document.querySelector('#login-form');
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  // get user info
  const email = loginForm['login-email'].value;
  const password = loginForm['login-password'].value;

    // log the user in
  firebase.auth().signInWithEmailAndPassword(email, password).then((cred) => {
    console.log(cred.user);
    alert("Logged In");
  }).catch(function (error) {
        alert(error.message);
    });
});