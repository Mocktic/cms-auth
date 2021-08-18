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
    var code=document.getElementById("verificationCode").value;
    coderesult.confirm(code).then(function (result) {
        alert("Successfully registered");
        window.location.href = "https://basicfire-84b90.web.app/register.html";
        var user=result.user;
        console.log(user);
    }).catch(function (error) {
        alert(error.message);
    });
}