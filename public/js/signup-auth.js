// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyCC9VAF-5C3epC2PAMmnNkgdnpLEtsh4i0",
    authDomain: "basicfire-84b90.firebaseapp.com",
    databaseURL: "https://basicfire-84b90-default-rtdb.firebaseio.com",
    projectId: "basicfire-84b90",
    storageBucket: "basicfire-84b90.appspot.com",
    messagingSenderId: "653716012309",
    appId: "1:653716012309:web:5081f329310d1d9dd1fd1c",
    measurementId: "G-W8Y9S6MPTX"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  // Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('signupForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();
 
  // Get values
  var fname = getInputVal('signup-fname');
  var lname = getInputVal('signup-lname');
  var genderVal = document.getElementsByName('gender');
            genderVal.forEach((gender) => {
                if (gender.checked) {
                    genderVal = gender.value;
                }
            })
  var email = getInputVal('signup-email');

  if(getInputVal('signup-password') == getInputVal('signup-confirmPassword')){
  var password = getInputVal('signup-password');
    
    // Save message
  saveMessage(fname, lname, genderVal, email, password);

    // Show alert
  document.querySelector('.alert').innerHTML = 'Registered Successfully!';
  document.querySelector('.alert').style.color = 'green';
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 5 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },5000);

  // Clear form
  document.getElementById('signupForm').reset();
} else{
  document.querySelector('.alert').innerHTML = 'Passwords do not match';
  document.querySelector('.alert').style.color = 'red';
  document.querySelector('.alert').style.display = 'block';
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },5000);

}

}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(fname, lname, genderVal, email, password){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    FirstName: fname,
    LastName:lname,
    gender:genderVal,
    email:email,
    password:password
  });
}