function mostrarEstadisticas() {
    // Obtener el nombre o ID 
    const input = document.getElementById('pokemonInput').value.toLowerCase();
    const resultadoDiv = document.getElementById('resultado');
    
    if (!input) {
        resultadoDiv.innerHTML = 'Ingresa un nombre o ID';
        return;
    }
    
    resultadoDiv.innerHTML = 'Cargando...';
    
    fetch(`https://pokeapi.co/api/v2/pokemon/${input}`)
        .then(res => res.json())
        .then(data => {
            // Mostrar  en consola
            console.log("Estadísticas base de", data.name);
            data.stats.forEach(stat => {
                console.log(`${stat.stat.name}: ${stat.base_stat}`);
            });
            
            // Mostrar en la página
            resultadoDiv.innerHTML = `<h3>Estadísticas de ${data.name}:</h3>`;
            data.stats.forEach(stat => {
                resultadoDiv.innerHTML += `<p>${stat.stat.name}: ${stat.base_stat}</p>`;
            });
        })
        .catch(error => {
            // Manejar errores
            console.error("Error:", error);
            resultadoDiv.innerHTML = 'Pokémon no encontrado';
        });
}