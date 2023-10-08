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






