// Simple navigation script for wireframes

function goTo(screenId) {
    // Hide all screens
    const screens = document.querySelectorAll('.screen');
    screens.forEach(s => s.classList.remove('active'));

    // Show target screen
    const target = document.getElementById(screenId);
    if (target) {
        target.classList.add('active');
    } else {
        console.error('Screen not found:', screenId);
    }
}

function handleLogin() {
    // Basic mock login logic
    // Just blindly redirects based on 'user type' usually
    // For this wireframe, let's just default to client home
    // unless we detect a specific email pattern maybe?

    // Actually, let's check the input value just for fun
    const email = document.querySelector('#screen-login input[type="email"]').value;

    if (email.includes('admin')) {
        goTo('screen-admin-dashboard');
    } else {
        goTo('screen-client-home');
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    goTo('screen-welcome');
});
