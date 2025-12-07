function buscarPokemon() {
    // Obtener el ID ingresado
    const pokemonId = document.getElementById('pokemonId').value;
    const resultadoDiv = document.getElementById('resultado');
    
    // Validar
    if (!pokemonId) {
        resultadoDiv.innerHTML = '<p>Ingresa un ID</p>';
        return;
    }
    
    resultadoDiv.innerHTML = '<p>Cargando...</p>';
    
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
        .then(res => res.json())
        .then(data => {
            // Obtener las habilidades
            const habilidades = data.abilities.map(a => a.ability.name).join(', ');
            
            // Mostrar datos principales
            resultadoDiv.innerHTML = `
                <div style="border:1px solid #000; padding:20px; max-width:300px; text-align:center;">
                    <h2>${data.name}</h2>
                    ${data.sprites.front_default ? 
                        `<img src="${data.sprites.front_default}" alt="${data.name}" style="width:150px;">` : 
                        '<p>Sin imagen disponible</p>'
                    }
                    <p><strong>ID:</strong> ${data.id}</p>
                    <p><strong>Peso:</strong> ${data.weight}</p>
                    <p><strong>Altura:</strong> ${data.height}</p>
                    <p><strong>Habilidades:</strong> ${habilidades}</p>
                </div>
            `;
        })
        .catch(error => {
            // Manejar errores
            console.error("Error:", error);
            resultadoDiv.innerHTML = '<p>Pokémon no encontrado</p>';
        });
}

// Cargar un ejemplo
window.onload = function() {
    document.getElementById('pokemonId').value = 25;
    buscarPokemon();
};