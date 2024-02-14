function validate(){
    document.querySelector("form").addEventListener("submit", function(event){
        event.preventDefault();
    })


    document.getElementById("emailError").textContent='';
    document.getElementById("passwordError").textContent='';

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (email === ''){
        document.getElementById("emailError").textContent = 'Please use a valid email address, such as user@example.com.';
    }
    if (password === ''){
        document.getElementById("passwordError").textContent = 'You must enter a password.';
    }
}

function account(){
    document.querySelector("form").addEventListener("submit", function(event){
        event.preventDefault();
    })


    document.getElementById("emailError").textContent='';
    document.getElementById("nameError").textContent='';
    document.getElementById("ageError").textContent='';
    document.getElementById("numberError").textContent='';

    const email = document.getElementById("email").value;
    const name = document.getElementById("name").value;
    const number = document.getElementById("phoneNumber").value;
    const age = document.getElementById("age").value;

    if (email === ''){
        document.getElementById("emailError").textContent = 'Please use a valid email address, such as user@example.com.';
    }
    if (name === ''){
        document.getElementById("nameError").textContent = 'Enter your full name.';
    }
    if (number === ''){
        document.getElementById("numberError").textContent = 'Please enter your phone number.';
    }
    if (age < 18){
        document.getElementById("ageError").textContent = 'You must be 18 and above';
    }
}