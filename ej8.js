function obtenerPokemonAleatorio() {
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = 'Cargando...';
    
    // Generar número aleatorio
    const randomId = Math.floor(Math.random() * 898) + 1;
    
    // Hacer fetch a la API
    fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`)
        .then(res => res.json())
        .then(data => {
            // Mostrar en consola
            console.log("Pokémon aleatorio:", data.name);
            
            // información en la pag
            resultadoDiv.innerHTML = `
                <p>Pokémon aleatorio (ID: ${randomId}):</p>
                <p><strong>Nombre:</strong> ${data.name}</p>
                <p><strong>Altura:</strong> ${data.height}</p>
                <p><strong>Peso:</strong> ${data.weight}</p>
            `;
        })
        .catch(error => {
            //errores
            console.error("Error:", error);
            resultadoDiv.innerHTML = 'Error al cargar';
        });
}