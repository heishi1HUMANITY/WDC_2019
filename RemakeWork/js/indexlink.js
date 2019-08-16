firebase.auth().onAuthStateChanged(function(user){
    if(user){
        document.getElementById('userfunc').href = 'user/user.html';
    }
});
