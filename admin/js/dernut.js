// Ce mois
const ctUsers = document.getElementById('thisChart').getContext('2d');
const thisChart = new Chart(ctUsers, {
    type: 'pie',
    data: {
        labels: ['Validées', 'En attentes', 'Ajournées', 'Rejetées'],
        datasets: [{
            label: 'Répartition des Utilisateurs',
            data: [3124, 1000, 1003, 2203],
            backgroundColor: [
                'green',
                '#ebedf0',
                'red',
                '#9ea2a8'
            ],
            borderColor: [
                'green',
                '#ebedf0',
                'red',
                '#9ea2a8'
            ],
            borderWidth: 1
        }]
    }
});

// Aujourd'hui
const ctxUsers = document.getElementById('usersChart').getContext('2d');
const usersChart = new Chart(ctxUsers, {
    type: 'pie',
    data: {
        labels: ['Validées', 'En attentes', 'Ajournées', 'Rejetées'],
        datasets: [{
            label: 'Répartition des Utilisateurs',
            data: [80, 5, 2, 3],
            backgroundColor: [
              'green',
              '#ebedf0',
              'red',
              '#9ea2a8'
          ],
          borderColor: [
              'green',
              '#ebedf0',
              'red',
              '#9ea2a8'
          ],
            borderWidth: 1
        }]
    }
});
