//Affichage des boutons et gestion des sections 
let currentSection = 1;

function showSection(section) {
    // Cacher la section actuelle
    document.querySelector(`#section-${currentSection}`).style.display = 'none';

    // Afficher la nouvelle section
    document.querySelector(`#section-${section}`).style.display = 'block';

    // Mettre à jour les classes des étapes
    document.querySelectorAll('.step').forEach((step, index) => {
        if (index + 1 === section) {
            step.classList.add('active');
        } else {
            step.classList.remove('active');
        }
    });

    // Mettre à jour la section courante
    currentSection = section;

    // Afficher ou cacher les boutons de navigation en fonction de la section
    document.getElementById('prev-btn').style.display = (currentSection > 1) ? 'inline-block' : 'none';
    document.getElementById('next-btn').style.display = (currentSection < document.querySelectorAll('.step').length) ? 'inline-block' : 'none';
    
    // Afficher ou cacher le bouton Soumettre en fonction de la section
    document.querySelector('.submit-btn').style.display = (currentSection === 3) ? 'inline-block' : 'none';
}

function nextSection() {
    if (currentSection < document.querySelectorAll('.step').length) {
        showSection(currentSection + 1);
    }
}

function prevSection() {
    if (currentSection > 1) {
        showSection(currentSection - 1);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    showSection(currentSection);
});


//Les affichages
document.addEventListener('DOMContentLoaded', () => {
    // Fonction pour mettre à jour le texte du bouton en fonction de la sélection
    function updateButtonText(buttonId, menuId) {
        const dropdownItems = document.querySelectorAll(`#${menuId} .dropdown-item`);
        const button = document.getElementById(buttonId);
        
        dropdownItems.forEach(item => {
            item.addEventListener('click', () => {
                button.textContent = item.textContent; // Met à jour le texte du bouton avec le texte de l'élément sélectionné
            });
        });
    }

    // Met à jour les boutons pour le département et le sexe
    updateButtonText('sexe-btn', 'sexe-menu');
    updateButtonText('departement-btn', 'departement-menu');
});



