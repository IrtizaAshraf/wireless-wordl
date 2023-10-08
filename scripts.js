
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
    window.location.href = 'index.html';
});