function validate(){

    let username = document.getElementById("username").value.trim();

    let password = document.getElementById("password").value;

    let message = document.getElementById("message");

    let uppercase = /[A-Z]/;

    let lowercase = /[a-z]/;

    let number = /[0-9]/;

    let special = /[!@#$%^&*(),.?":{}|<>]/;

    if(username==""){

        message.style.color="red";

        message.innerHTML="❌ Please enter Username.";

    }

    else if(username.length<5){

        message.style.color="red";

        message.innerHTML="❌ Username must contain at least 5 characters.";

    }

    else if(username.includes(" ")){

        message.style.color="red";

        message.innerHTML="❌ Username cannot contain spaces.";

    }

    else if(password==""){

        message.style.color="red";

        message.innerHTML="❌ Please enter Password.";

    }

    else if(password.length<8){

        message.style.color="red";

        message.innerHTML="❌ Password must be at least 8 characters.";

    }

    else if(!uppercase.test(password)){

        message.style.color="red";

        message.innerHTML="❌ Password must contain one uppercase letter.";

    }

    else if(!lowercase.test(password)){

        message.style.color="red";

        message.innerHTML="❌ Password must contain one lowercase letter.";

    }

    else if(!number.test(password)){

        message.style.color="red";

        message.innerHTML="❌ Password must contain one number.";

    }

    else if(!special.test(password)){

        message.style.color="red";

        message.innerHTML="❌ Password must contain one special character.";

    }

    else{

        message.style.color="green";

        message.innerHTML="✅ Username and Password are Valid!";

    }

}

function togglePassword(){

    let password=document.getElementById("password");

    let eye=document.querySelector(".eye");

    if(password.type==="password"){

        password.type="text";

        eye.innerHTML="🙈"; 

    }

    else{

        password.type="password";

        eye.innerHTML="👁️";

    }

}
