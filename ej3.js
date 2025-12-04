async function buscarPokemonPorId() {
    const pokemonId = document.getElementById('pokemonId').value;
    const resultadoDiv = document.getElementById('resultado');
    
    if (!pokemonId) {
        resultadoDiv.innerHTML = '<p>Por favor, ingresa un ID de Pokémon</p>';
        return;
    }
    
    resultadoDiv.innerHTML = '<p>Buscando Pokémon...</p>';
    
    try {
        // Usando la API
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
        
        if (!response.ok) {
            throw new Error('Pokémon no encontrado');
        }
        
        const data = await response.json();
        
        // Mostra en consola
        console.log("Nombre del Pokémon:", data.name);
        
        // Mostrar también en la página
        resultadoDiv.innerHTML = `
            <p>¡Pokémon encontrado!</p>
            <p><strong>Nombre:</strong> ${data.name}</p>
        `;
        
    } catch (error) {
        console.error('Error:', error.message);
        resultadoDiv.innerHTML = `<p>Error: ${error.message}</p>`;
    }
}

// Función para probar automáticamente
function probarConDitto() {
    document.getElementById('pokemonId').value = 132;
    buscarPokemonPorId();
}

// Cargar automáticamente Ditto
window.onload = probarConDitto;