import get from './utils/getElement.js';
import getUser from './utils/fetchUser.js';
import displayUser from './utils/displayUser.js';

const btn = get('.btn');
const userName = get('#userName'); // Element displaying the user name
const logoutBtn = document.getElementById('logoutBtn');
const changePasswordBtn = document.getElementById('changePasswordBtn');
    
let currentUser = {}; // To store the current user data

// Function to show user data
const showUser = async () => {
    const person = await getUser();  // Get user from API
    currentUser = person;            // Store user data
    displayUser(person);             // Display user data on page
    userName.textContent = currentUser.name; // Display user name
};


// Event listener for change name button
changeNameBtn.addEventListener('click', handleNameChange);

// Event listener to show user when the page is loaded
window.addEventListener('DOMContentLoaded', showUser);

// Event listener for the main button click
btn.addEventListener('click', showUser);

// Document ready event to check login session
document.addEventListener('DOMContentLoaded', () => {
    const isLoggedIn = sessionStorage.getItem("isLoggedIn");
    if (!isLoggedIn) {
        // If no login session, redirect to login page
        window.location.href = 'login.html';
    }

    // Event listener for logout button
    logoutBtn.addEventListener('click', () => {
        sessionStorage.removeItem("isLoggedIn");  // Remove login session
        window.location.href = 'login.html';      // Redirect to login page
    });

    // Event listener for change password button
    changePasswordBtn.addEventListener('click', () => {
        window.location.href = 'change-password.html';  // Redirect to change password page
    });
});
