const registrationForm = document.getElementById('registrationForm');
 
 const Userpassword = []

registrationForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const user = {
        username: username,
        email: email,
        password: password
    };
    console.log(user);
    
    Userpassword.push(user)
    // Store user data in local storage
    localStorage.setItem('user', JSON.stringify(user));

    alert('Registration successful! User data has been stored.');

    // Optionally, you can redirect to another page after successful registration
    window.location.href = 'index.html';
});






const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const enteredUsername = document.getElementById('username').value;
    const enteredPassword = document.getElementById('password').value;

    // Retrieve user data from local storage
    const storedUser = JSON.parse(localStorage.getItem('user'));

    if (storedUser && enteredUsername === storedUser.username && enteredPassword === storedUser.password) {
        alert('Login Successful!');
        // Redirect to another page or perform other actions after successful login
    } else {
        alert('Login Failed. Please check your username and password.');
    }
});
