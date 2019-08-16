firebase.auth().onAuthStateChanged(function(user){
    if(user){
        document.getElementById('username').innerText = user.displayName;
    }else{
        alert("You are not login.");
        location.href = '../member/membersite.html';
    }
});
