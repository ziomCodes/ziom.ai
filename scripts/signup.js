let users = [];

document.getElementById('signup-btn').addEventListener('click', () => {
    const phone = document.getElementById('phone').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    if (password === confirmPassword) {
        users.push({ phone, username, password });
        alert('Signed up successfully!');
        document.getElementById('signup-form').style.display = 'none';
        document.getElementById('login-form').style.display = 'block';
    } else {
        alert('Passwords do not match.');
    }
});

document.getElementById('login-btn').addEventListener('click', () => {
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    const user = users.find(user => user.username === username && user.password === password);
    if (user) {
        alert('Logged in successfully!');
        window.location.href = 'app.html';
    } else {
        alert('Username or password is incorrect. Try again.');
    }
});

