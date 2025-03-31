// Sélectionne le bouton toggle et le menu
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

const main = document.querySelector('main')

// Ajoute un événement pour afficher/masquer le menu
menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active'); // Ajoute ou enlève la classe 'active'
    main.classList.toggle('active'); 
});

/* Partie du carousel */

const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carousel-button-right');
const prevButton = document.querySelector('.carousel-button-left');

// Fonction pour déplacer le carousel vers une slide cible
const moveToSlide = (track, currentSlide, targetSlide) => {
    const slideWidth = currentSlide.getBoundingClientRect().width; // Largeur actuelle de la slide
    const targetIndex = slides.indexOf(targetSlide); // Index de la slide cible
    const amountToMove = targetIndex * slideWidth; // Distance à déplacer
    track.style.transform = `translateX(-${amountToMove}px)`; // Déplace le track
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
};

// Navigation avec le bouton "Suivant"
nextButton.addEventListener('click', () => {
    const currentSlide = track.querySelector('.current-slide');
    const nextSlide = currentSlide.nextElementSibling;

    if (nextSlide) {
        moveToSlide(track, currentSlide, nextSlide);
    }
});

// Navigation avec le bouton "Précédent"
prevButton.addEventListener('click', () => {
    const currentSlide = track.querySelector('.current-slide');
    const prevSlide = currentSlide.previousElementSibling;

    if (prevSlide) {
        moveToSlide(track, currentSlide, prevSlide);
    }
});

// Initialisation
slides[0].classList.add('current-slide'); // Définit la première slide comme active