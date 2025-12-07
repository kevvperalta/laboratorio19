function buscarPokemon() {
    // Obtener el nombre o ID
    const input = document.getElementById('pokemonInput').value.toLowerCase();
    const resultadoDiv = document.getElementById('resultado');
    // Validar
    if (!input) {
        resultadoDiv.innerHTML = '<p>Ingresa un nombre o ID</p>';
        return;
    }
    
    resultadoDiv.innerHTML = '<p>Cargando...</p>';
    
    fetch(`https://pokeapi.co/api/v2/pokemon/${input}`)
        .then(res => res.json())
        .then(data => {
            // Obtener los tipos del Pokémon
            const tipos = data.types.map(t => t.type.name);
            const imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.id}.png`;
            
            // Mostrar nombre, imagen y tipos
            resultadoDiv.innerHTML = `

                <div style="border:1px solid #ccc; padding:20px; margin:10px; text-align:center; max-width:300px;">
                    <h2>${data.name.toUpperCase()}</h2>
                    <img src="${imgUrl}" alt="${data.name}" style="width:150px;">
                    <p><strong>Tipos:</strong> ${tipos.join(', ')}</p>
                    <p><strong>ID:</strong> ${data.id}</p>
                    ${tipos.length > 1 ? 
                        `<p><em>Este Pokémon tiene ${tipos.length} tipos</em></p>` : 
                        ''
                    }
                </div>
            `;
            
            // Mostrar en consola
            console.log(`Pokémon encontrado: ${data.name}`);
            console.log(`Tipos: ${tipos.join(', ')}`);
        })
        .catch(error => {
            // Manejar errores
            console.error("Error:", error);
            resultadoDiv.innerHTML = '<p>Error: Pokémon no encontrado</p>';
        });
}

// Permitir buscar
document.getElementById('pokemonInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        buscarPokemon();
    }
});

// Cargar un ejemplo automáticamente
window.onload = function() {
    document.getElementById('pokemonInput').value = 'charizard';
    buscarPokemon();
};