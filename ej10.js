async function cargarPokemons() {
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = 'Cargando...';
    
    try {
        const pokemons = [];
        
        // Cargar Pokémon del 1 al 10 
        for (let i = 1; i <= 10; i++) {
            console.log(`Cargando Pokémon ID: ${i}`);
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
            if (response.ok) {
                const data = await response.json();
                pokemons.push(data); // Agregar a la lista
            }
        }
        
        // Mostrar cada Pokémon en una tarjeta
        resultadoDiv.innerHTML = '<h3>Pokémon 1-10:</h3>';
        
        pokemons.forEach(pokemon => {
            // Crear tarjeta para cada Pokémon
            const card = document.createElement('div');
            card.className = 'pokemon-card';
            
            // Mostrar nombre, imagen e ID
            card.innerHTML = `
                <h3>${pokemon.name}</h3>
                <p>ID: ${pokemon.id}</p>
                ${pokemon.sprites.front_default ? 
                    `<img src="${pokemon.sprites.front_default}" alt="${pokemon.name}" class="pokemon-img">` : 
                    '<p>Sin imagen</p>'
                }
            `;
            
            resultadoDiv.appendChild(card);
        });
        
    } catch (error) {
        // Manejar errores de conexión o API
        console.error("Error:", error);
        resultadoDiv.innerHTML = 'Error al cargar';
    }
}