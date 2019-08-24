function resetfunc(){
    var email = document.getElementById('email').value;

    firebase.auth().sendPasswordResetEmail(email).then(function(result){

    }).catch(function(error){
        alert(error.code + ',' + error.message);
    });
}
