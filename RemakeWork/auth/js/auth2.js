
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    firebase.auth().currentUser.sendEmailVerification();
        location.href = '../user/user.html';
  } else {
    // No user is signed in.
        alert(error.code + ',' + error.message);
  }
});
