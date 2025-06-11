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



document.addEventListener("DOMContentLoaded", () => {
  const track = document.getElementById("sliderTrack");
  const nextBtn = document.getElementById("nextBtn");
  const prevBtn = document.getElementById("prevBtn");

  if (!track || !nextBtn || !prevBtn) return;

  let position = 0;

  function getSlideWidth() {
    const image = track.querySelector("img");
    const gap = window.innerWidth <= 768 ? 10 : 20;
    const visibleCount = window.innerWidth <= 768 ? 1 : 3;
    return (image.offsetWidth + gap) * visibleCount;
  }

  function slideTo(pos) {
    track.style.transform = `translateX(-${pos}px)`;
  }

  nextBtn.addEventListener("click", () => {
    const wrapperWidth = track.parentElement.offsetWidth;
    const trackWidth = track.scrollWidth;
    const slideWidth = getSlideWidth();

    if (position + wrapperWidth < trackWidth) {
      position = Math.min(position + slideWidth, trackWidth - wrapperWidth);
      slideTo(position);
    } else {
      // revenir au début si on dépasse
      position = 0;
      slideTo(position);
    }
  });

  prevBtn.addEventListener("click", () => {
    const slideWidth = getSlideWidth();

    if (position - slideWidth >= 0) {
      position -= slideWidth;
      slideTo(position);
    } else {
      position = 0;
      slideTo(position);
    }
  });

  // Recalcule à chaque resize
  window.addEventListener("resize", () => {
    slideTo(position);
  });
});
