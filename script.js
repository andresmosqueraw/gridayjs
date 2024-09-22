document.addEventListener('DOMContentLoaded', () => {
    const gridContainer = document.getElementById('grid-container');
    const gridContainer2 = document.getElementById('grid-container-2');
    const gridContainer3 = document.getElementById('grid-container-3'); // Nuevo contenedor
    const startDate = new Date('2024-06-21');
    const endDate = new Date('2024-12-28');

    function populateGrid(gridContainer) {
        // Añadir días vacíos al principio hasta llegar al día de la semana correcto
        for (let i = 1; i < startDate.getDay(); i++) {
            const emptyDiv = document.createElement('div');
            emptyDiv.classList.add('day', 'empty');
            gridContainer.appendChild(emptyDiv);
        }

        // Ciclo para crear los días
        for (let currentDate = new Date(startDate); currentDate <= endDate; currentDate.setDate(currentDate.getDate() + 1)) {
            const dayDiv = document.createElement('div');
            dayDiv.classList.add('day');
            dayDiv.setAttribute('data-date', currentDate.toISOString().split('T')[0]);
            dayDiv.textContent = currentDate.getDate();

            gridContainer.appendChild(dayDiv);
        }

        // Agregar interactividad para este contenedor
        gridContainer.querySelectorAll('.day').forEach(day => {
            day.addEventListener('click', function() {
                this.classList.toggle('marked'); // Marca o desmarca el día
            });
        });
    }

    // Llenar los tres grids con interactividad independiente
    populateGrid(gridContainer); // Para el primer contenedor
    populateGrid(gridContainer2); // Para el segundo contenedor
    populateGrid(gridContainer3); // Para el tercer contenedor
});