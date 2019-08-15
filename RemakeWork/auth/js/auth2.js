
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    firebase.auth().currentUser.sendEmailVerification();
    setTimeout(function(){
        location.href = '../index.html';
    },3*1000);
  } else {
    // No user is signed in.
  }
});
