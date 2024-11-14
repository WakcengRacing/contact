// profile.js
window.addEventListener('DOMContentLoaded', () => {
    // Ambil query string dari URL
    const urlParams = new URLSearchParams(window.location.search);
    const username = urlParams.get('username');
    const email = urlParams.get('email');

    // Tampilkan data di halaman profil
    if (username && email) {
        document.getElementById('profileUsername').textContent = username;
        document.getElementById('profileEmail').textContent = email;
    }
});
