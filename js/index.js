document.getElementById('btn-submut').addEventListener('click', function () {
    const emailField = document.getElementById ('user-email');
    const email = emailField.value;
    
    const passField = document.getElementById('pass');
    const pass = passField.value;
    
    if (email === 'afsa@a.com' && pass === 'okk') {
        window.location.href = 'e-wallet.html';
    } else {
        alert('Not allow');
    }
    
});