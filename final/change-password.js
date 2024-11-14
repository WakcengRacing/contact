// const changePasswordForm = document.getElementById('changePasswordForm');
// const currentPasswordInput = document.getElementById('currentPassword');
// const newPasswordInput = document.getElementById('newPassword');
// const confirmPasswordInput = document.getElementById('confirmPassword');

// changePasswordForm.addEventListener('submit', function (e) {
//     e.preventDefault(); // Mencegah form melakukan submit default

//     // Mendapatkan nilai input
//     const currentPassword = currentPasswordInput.value;
//     const newPassword = newPasswordInput.value;
//     const confirmPassword = confirmPasswordInput.value;

//     // Validasi jika password baru dan konfirmasi password sama
//     if (newPassword !== confirmPassword) {
//         alert('Password baru dan konfirmasi password tidak cocok.');
//         return;
//     }

//     // Mendapatkan password lama dari sessionStorage
//     const storedPassword = sessionStorage.getItem('password');

//     // Cek apakah password lama sesuai dengan yang disimpan
//     if (currentPassword === storedPassword) {
//         // Jika password lama benar, perbarui password
//         sessionStorage.setItem('password', newPassword); // Simpan password baru
//         alert('Password berhasil diganti!');
//         changePasswordForm.reset(); // Reset form setelah mengganti password
//         window.location.href = 'profile.html'; // Arahkan kembali ke halaman profil
//     } else {
//         // Jika password lama salah
//         alert('Password lama yang Anda masukkan salah.');
//     }
// });
