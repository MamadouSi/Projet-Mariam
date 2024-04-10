function showMessage(button) {
    var buttons = document.querySelectorAll('footer nav ul li button');
    var footer = document.querySelector('footer');

    // Supprime les anciens messages
    var oldMessages = document.querySelectorAll('.message');
    oldMessages.forEach(function(message) {
        footer.removeChild(message);
    });

    // Met en surbrillance le bouton cliqué
    buttons.forEach(function(btn) {
        btn.style.borderBottom = 'none'; // Supprime la bordure inférieure
    });
    button.style.borderBottom = '1px solid white'; // Ajoute une bordure inférieure de 1 pixel blanche

    // Crée un nouveau message pour le bouton cliqué
    var newMessage = document.createElement('div');
    newMessage.innerHTML = button.getAttribute('data-message');
    newMessage.classList.add('message');
    footer.insertBefore(newMessage, document.getElementById('message'));
}


'use strict';

const fermerMenu = () => {
    // Récupérer le menu
    const input = document.getElementById('menu-cb');
    input.checked = false;

    const fenetreNode = document.getElementById('menu-cote');
    fenetreNode.remove();
};

const changerEtatMenu = () => {
    // Récupérer le menu
    const input = document.getElementById('menu-cb');
    const actif = input.checked;

    if (actif) {
        const fenetreNode = document.createElement('div');
        fenetreNode.id = 'menu-cote';
        fenetreNode.className = 'menu-cote';
        fenetreNode.addEventListener('click', fermerMenu);
        document.body.appendChild(fenetreNode);
    } else {
        const fenetreNode = document.getElementById('menu-cote');
        fenetreNode.remove();
    }
};

const input = document.getElementById('menu-cb');
input.addEventListener('click', changerEtatMenu);

// Ajout ultérieur :
// Lorsque le menu a été déroulé et l'utilisateur rafraîchit
// la page, exécuter la procédure d'ouverture pour permettre à
// l'utilisateur de clôturer le menu en cliquant sur l'écran
if (input.checked) {
    changerEtatMenu();
}
