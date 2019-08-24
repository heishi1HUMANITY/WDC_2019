function pre(){
    firebase.auth().onAuthStateChanged(function(user){
        if(user){
            if(user.displayName){
                document.getElementById('username').innerText = user.displayName;
            }
            return;
        }else{
            alert("You are not login.");
            //location.href = '../member/membersite.html';
            return;
        }
    });

};

function signoutfunc(){
    firebase.auth().signOut().then(function(result){
        location.href = '../member/membersite.html';
    }).catch(function(error){
        alert(error.code + ',' + error.message);
    });
};

function deletefunc(){
    firebase.auth().currentUser.delete().then(function(result){
        location.href = '../member/membersite.html';
    }).catch(function(error){
        alert(error.code + ',' + error.message);
    });
};
