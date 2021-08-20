window.onload=function () {
    render();
  };
  function render() {
      window.recaptchaVerifier=new firebase.auth.RecaptchaVerifier('recaptcha-container');
      recaptchaVerifier.render();
  }
function phoneAuth() {

    //get the number
    var number=document.getElementById('phone-num').value;
    //phone number authentication function of firebase
    //it takes two parameter first one is number,,,second one is recaptcha
    firebase.auth().signInWithPhoneNumber(number,window.recaptchaVerifier).then(function (confirmationResult) {
        //s is in lowercase
        window.confirmationResult=confirmationResult;
        coderesult=confirmationResult;
        console.log(coderesult);
        alert("Message sent");
        document.getElementById("otp-field").style.display = "";
        document.getElementById("phone-label").style.visibility = "hidden";
        document.getElementById("phone-num").disabled = true;
        document.getElementById("otp-button").style.display = "none";
        document.getElementById("verify-button").style.display = "";
        document.getElementById("re-captcha").style.display = "none";
    }).catch(function (error) {
        alert(error.message);
    });

}

function codeverify() {
    
    //get the number
    var number=document.getElementById('phone-num').value;
    var code=document.getElementById("verificationCode").value;
    coderesult.confirm(code).then(function (result) {
        alert("Phone number verified successfully!");
        var user=result.user;
        console.log(user);
        dataInDb();
    }).catch(function (error) {
        alert(error.message);
    });
}

function dataInDb(){
    const userDetail = firebase.auth().currentUser;
        var userId = userDetail.uid;
        var database = firebase.database();
        // [START rtdb_write_new_user]
        function writeUserData(userId, number) {
          firebase.database().ref('users/' + userId).set({
            Phone: number,
            uid: userId
          });

        }
        console.log(userDetail.uid);
        window.location.href = "../register.html";
}

