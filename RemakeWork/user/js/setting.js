function nameUpdate(){
    var name = document.getElementById('name').value;
    firebase.auth().currentUser.updateProfile({
        displayName: name
    }).then(function(result){
        alert('Username has been updated.');
    }).catch(function(error){
        alert(error.code + ',' + error.message);
    });
};

function emailUpdate(){
    var email = document.getElementById('email').value;
    firebase.auth().currentUser.updateEmail(email).then(function(result){
        alert('Email has been updated.')
    }).catch(function(error){
        alert(error.code + ',' + error.message);
    });
};

function passwordUpdate(){
    var password = document.getElementById('password').value;
    firebase.auth().currentUser.updatePassword(password).then(function(result){
        alert('Password has been updated.')
    }).catch(function(error){
        alert(error.code + ',' + error.message);
    });
};
