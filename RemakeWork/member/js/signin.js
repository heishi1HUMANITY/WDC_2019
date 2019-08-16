
function signIn(){
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    firebase.auth().signInWithEmailAndPassword(email, password).then(function(result){
        alert('success');
        location.href = '../user/user.html';
    }).catch(function(error){
        var errorCode=error.code;
        var errorMessage=error.message;
        alert(errorCode + "," + errorMessage);
    });
}
