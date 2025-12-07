function listarPokemons() {
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = 'Cargando...';
    
    fetch("https://pokeapi.co/api/v2/pokemon?limit=20")
        .then(res => res.json())
        .then(data => {
            console.log("Primeros 20 Pokémon:", data.results);
            resultadoDiv.innerHTML = '<h3>Primeros 20 Pokémon:</h3><ul>';
            data.results.forEach(pokemon => {
                resultadoDiv.innerHTML += `<li>${pokemon.name}</li>`;
            });
            resultadoDiv.innerHTML += '</ul>';
        })
        .catch(error => {
            console.error("Error:", error);
            resultadoDiv.innerHTML = 'Error al cargar';
        });
}