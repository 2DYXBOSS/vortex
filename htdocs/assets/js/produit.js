function toggleContent(id) {
    var moreContent = document.getElementById(id);
    var buttons = document.querySelectorAll('.' + id + '1'); // Sélectionne les boutons liés
    
    if (moreContent.style.display === 'none' || moreContent.style.display === '') {
        moreContent.style.display = 'block';
        buttons.forEach(btn => btn.textContent = 'Lire moins'); // Change le texte de tous les boutons
    } else {
        moreContent.style.display = 'none';
        buttons.forEach(btn => btn.textContent = 'Lire plus'); // Change le texte de tous les boutons
    }
}
