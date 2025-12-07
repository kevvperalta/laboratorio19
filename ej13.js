function mostrarTablaStats() {
    const input = document.getElementById('pokemonInput').value.toLowerCase();
    const resultadoDiv = document.getElementById('resultado');
    
    if (!input) {
        resultadoDiv.innerHTML = '<p>Ingresa un nombre o ID</p>';
        return;
    }
    
    resultadoDiv.innerHTML = '<p>Cargando...</p>';
    
    fetch(`https://pokeapi.co/api/v2/pokemon/${input}`)
        .then(res => res.json())
        .then(data => {
            // Tabla
            let html = `<h3>Estadísticas de ${data.name}:</h3>`;
            html += '<table border="1" cellpadding="8" cellspacing="0">';
            html += '<tr><th>STAT</th><th>VALOR</th></tr>';
            
            data.stats.forEach(stat => {
                html += `<tr><td>${stat.stat.name}</td><td>${stat.base_stat}</td></tr>`;
            });
            
            html += '</table>';
            resultadoDiv.innerHTML = html;
            
            // Mostramos en la consola
            console.log("Estadísticas:");
            data.stats.forEach(stat => {
                console.log(stat.stat.name + ": " + stat.base_stat);
            });
        })
        .catch(error => {
            console.error("Error:", error);
            resultadoDiv.innerHTML = '<p>Pokémon no encontrado</p>';
        });
}

window.onload = function() {
    document.getElementById('pokemonInput').value = '25';
    mostrarTablaStats();
};