
function signUp() {
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;
  var username = document.getElementById('username').value;

  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(function(result) {
      console.log(result);
      firebase.auth().currentUser.updateProfile({
          displayName: username
      });
      location.href = "auth2.html";
    }).catch(function(error) {

    });

}
