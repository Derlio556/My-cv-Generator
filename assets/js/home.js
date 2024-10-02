// Ce fichier JS est pour les interactions sur la page d'accueil.
// Ici, nous pourrions gérer l'ajout de futures fonctionnalités JS,
// comme une animation de texte, ou des événements sur le bouton CTA.

/* Exemple simple : une fonction qui affiche un message quand on clique sur le bouton "Créer mon CV". */

document.addEventListener("DOMContentLoaded", function() {
    // On sélectionne le bouton avec la classe 'cta-btn'
    const ctaButton = document.querySelector('.cta-btn');
    
    // On attache un événement 'click' au bouton
    ctaButton.addEventListener('click', function(event) {
        // Affiche un message dans la console lorsque l'utilisateur clique sur le bouton
        console.log("L'utilisateur clique sur 'Créer mon CV'");
    });
});
