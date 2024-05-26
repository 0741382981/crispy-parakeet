document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const searchButton = document.getElementById('search-button');
    const searchInput = document.getElementById('search-input');

    menuToggle.addEventListener('click', function() {
        mobileMenu.classList.toggle('active');
    });

    searchButton.addEventListener('click', function() {
        alert('Search for: ' + searchInput.value);
    });
});
