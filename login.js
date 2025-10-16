// user inputs

const loginEmail = document.getElementById('email')
const loginPassword = document.getElementById('password')
const forgetPassword = document.getElementById('forgetPassword');
const eyeclode = document.getElementById('eyeclosed');
const eyeopen = document.getElementById('eyeopen');

// ==============================toggle eye icon
// eye closed toggle
eyeclode.onclick = function(){
    if(loginPassword.type == 'password'){
        loginPassword.type = 'text';
        eyeopen.style.display = "block";
        eyeclode.style.display = 'none';
    }else{
        loginPassword.type = 'password'
        eyeclode.style.display = 'block';
        eyeopen.style.display = 'none'
    }
}
// =========== eye open toggle
eyeopen.onclick = function(){
    if(loginPassword.type == 'password'){
        loginPassword.type = 'text';
        eyeopen.style.display = "block";
        eyeclode.style.display = 'none';
    }else{
        loginPassword.type = 'password'
        eyeclode.style.display = 'block';
        eyeopen.style.display = 'none'
    }
}

function login(){
const emailValue = loginEmail.value;
const passwordValue = loginPassword.value;

const userInfor = localStorage.getItem('user');


if(!userInfor){
    alert('user Not found please register..')
    return
}

const user = JSON.parse(userInfor);

if(user.password === passwordValue && user.email === emailValue){
    alert(`welcome back ${user.name}`)
}else{
    alert('incorect password')
    return;
}




}





