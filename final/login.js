// login.js
const form = document.getElementById('loginForm');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Cek login (misalnya menggunakan hardcoded atau logika login)
    if (email === "admin@example.com" && password === "password123") {
        // Login berhasil, alihkan ke halaman profil dengan email sebagai query parameter
        window.location.href = `index.html?email=${encodeURIComponent(email)}`;
    } else {
        alert("Login failed. Please try again.");
    }
});
