// Fungsi untuk mengambil data acak dari API Random User
const fetchContactData = async () => {
    const url = 'https://randomuser.me/api/?results=5'; // Mengambil 5 pengguna acak
    try {
        const response = await fetch(url);
        const data = await response.json();
        
        if (data.results && data.results.length > 0) {
            const users = data.results;

            // Menampilkan data pengguna
            const contactList = document.getElementById('contactList');
            contactList.innerHTML = ''; // Kosongkan sebelumnya jika ada konten

            users.forEach(user => {
                const userCard = document.createElement('div');
                userCard.classList.add('user-card');
                userCard.innerHTML = `
                    <img src="${user.picture.medium}" alt="${user.name.first} ${user.name.last}" class="user-img">
                    <h3>${user.name.first} ${user.name.last}</h3>
                    <p><strong>Phone:</strong> ${user.phone ? user.phone : 'No phone number available'}</p>
                    <p><strong>Email:</strong> ${user.email}</p>
                `;
                contactList.appendChild(userCard);
            });
        } else {
            console.error('No user data available');
        }
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

// Panggil fungsi untuk memuat data saat halaman dimuat
document.addEventListener('DOMContentLoaded', fetchContactData);
