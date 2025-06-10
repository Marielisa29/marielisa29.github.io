// JavaScript pour le menu responsive
document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.querySelector('.menu-icon');
    const navbar = document.querySelector('.navbar');
    const navbarOverlay = document.querySelector('.navbar-overlay');
    const navLinks = document.querySelectorAll('.navbar a');

    // Fonction pour ouvrir/fermer le menu
    function toggleMenu() {
        navbar.classList.toggle('active');
        navbarOverlay.classList.toggle('active');
    }

    // Fonction pour fermer le menu
    function closeMenu() {
        navbar.classList.remove('active');
        navbarOverlay.classList.remove('active');
    }

    // Event listeners
    menuIcon.addEventListener('click', toggleMenu);
    navbarOverlay.addEventListener('click', closeMenu);

    // Fermer le menu quand on clique sur un lien
    navLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    // Fermer le menu avec la touche Escape
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeMenu();
        }
    });
});
