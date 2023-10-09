
const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const enteredUsername = document.getElementById('username').value;
    const enteredPassword = document.getElementById('password').value;

    // Retrieve user data from local storage
    const storedUser = JSON.parse(localStorage.getItem('user')) || [];

    const matchedUserdata = storedUser.map(user => user.name === enteredUsername && user.password === enteredPassword); 
//   console.log(matchedUserdata);
    if (matchedUserdata) {
        Swal.fire({
            title: 'Custom animation with Animate.css',
            showClass: {
              popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
              popup: 'animate__animated animate__fadeOutUp'
            }
        })
        // Redirect to another page or perform other actions after successful login
    } else {
        alert('Login Failed. Please check your username and password.');
    }
    window.location.href = 'index.html';
});




// storedUser && enteredUsername === storedUser.username && enteredPassword === storedUser.password