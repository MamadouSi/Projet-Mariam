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
