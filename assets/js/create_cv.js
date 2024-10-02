// Ce script gère la génération de l'aperçu du CV après que l'utilisateur a rempli le formulaire.

document.addEventListener("DOMContentLoaded", function() {
    // Sélection des éléments du DOM
    const form = document.getElementById('cv-form');
    const previewSection = document.getElementById('cv-preview');
    const previewContent = document.getElementById('preview-content');

    // Gestion de la soumission du formulaire
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Empêche le rechargement de la page

        // Récupération des données du formulaire
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const experience = document.getElementById('experience').value;
        const skills = document.getElementById('skills').value;

        // Création de l'aperçu du CV
        let cvHTML = `<h3>${name}</h3>`;
        cvHTML += `<p>Email : ${email}</p>`;
        cvHTML += `<h4>Expérience professionnelle</h4>`;
        cvHTML += `<p>${experience}</p>`;
        cvHTML += `<h4>Compétences</h4>`;
        cvHTML += `<p>${skills}</p>`;

        // Affichage du CV dans la section d'aperçu
        previewContent.innerHTML = cvHTML;
        previewSection.style.display = 'block'; // Affiche la section d'aperçu
    });
});
