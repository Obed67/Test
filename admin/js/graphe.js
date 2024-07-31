document.addEventListener('DOMContentLoaded', function() {
    var ctx = document.getElementById('graphe').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'bar', // Type de graphique (barres dans ce cas)
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'], // Labels pour l'axe X
            datasets: [{
                label: 'Nombre de demandes',
                data: [12, 19, 3, 5, 2, 3], // Données du graphique
                backgroundColor: 'rgba(75, 192, 192, 0.2)', // Couleur de fond des barres
                borderColor: 'rgba(75, 192, 192, 1)', // Couleur des bordures des barres
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
});