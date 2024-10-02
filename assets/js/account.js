// Ce fichier JS gère les interactions utilisateur sur la page "Mon compte".
// Il contient les fonctions pour modifier les informations de l'utilisateur
// et se déconnecter.

/* Quand le document est prêt, nous attachons des événements aux boutons */

document.addEventListener("DOMContentLoaded", function() {
    // Sélection des éléments du DOM
    const editProfileButton = document.getElementById('edit-profile-btn');
    const logoutButton = document.getElementById('logout-btn');
    const userName = document.getElementById('user-name');
    const userEmail = document.getElementById('user-email');

    // Gérer l'événement de modification du profil
    editProfileButton.addEventListener('click', function() {
        // Simplement pour cet exemple, on utilise des prompt pour modifier les infos
        const newName = prompt("Entrez votre nouveau nom :", userName.textContent);
        const newEmail = prompt("Entrez votre nouvel email :", userEmail.textContent);

        // On vérifie que les entrées ne sont pas vides avant de les mettre à jour
        if (newName !== null && newName.trim() !== "") {
            userName.textContent = newName;
        }
        if (newEmail !== null && newEmail.trim() !== "") {
            userEmail.textContent = newEmail;
        }

        console.log("Profil mis à jour : ", newName, newEmail);
    });

    // Gérer l'événement de déconnexion
    logoutButton.addEventListener('click', function() {
        const confirmation = confirm("Voulez-vous vraiment vous déconnecter ?");
        if (confirmation) {
            // Simule la déconnexion (cela pourrait être une redirection vers la page de connexion, etc.)
            console.log("Utilisateur déconnecté");
            alert("Vous avez été déconnecté !");
            // Rediriger vers la page d'accueil
            window.location.href = "home.html";
        }
    });
});
