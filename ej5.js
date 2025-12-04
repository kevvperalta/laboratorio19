async function obtenerDatosPikachuAsync() {
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = '<p>Cargando datos de Pikachu...</p>';
    
    console.log("Iniciando búsqueda de Pikachu con async/await");
    
    try {
        // Usar async/await
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu");
        
        if (!response.ok) {
            throw new Error('Error en la respuesta: ' + response.status);
        }
        
        const data = await response.json();
        
        // Mostrar en consola 
        console.log("Altura de Pikachu:", data.height);
        console.log("Peso de Pikachu:", data.weight);
        
        //información adicional
        console.log("Nombre:", data.name);
        console.log("ID:", data.id);
        console.log("Tipo(s):", data.types.map(t => t.type.name).join(', '));
        
        // Mostramos en la página
        resultadoDiv.innerHTML = `
            <h3>¡Datos de Pikachu obtenidos</h3>
            <p><strong>Nombre:</strong> ${data.name}</p>
            <p><strong>ID:</strong> ${data.id}</p>
            <p><strong>Altura:</strong> ${data.height} (unidades de la API)</p>
            <p><strong>Peso:</strong> ${data.weight} (unidades de la API)</p>
            <p><strong>Altura real:</strong> ${data.height / 10} metros</p>
            <p><strong>Peso real:</strong> ${data.weight / 10} kilogramos</p>
            <p><strong>Tipo(s):</strong> ${data.types.map(t => t.type.name).join(', ')}</p>
            <p><strong>Habilidades:</strong> ${data.abilities.map(a => a.ability.name).join(', ')}</p>
        `;
        
    } catch (error) {
        console.error("Error:", error);
        resultadoDiv.innerHTML = `
            <p style="color: red;"><strong>Error:</strong> ${error.message}</p>
        `;
    }
}

// Ejecutar automáticamente
window.onload = obtenerDatosPikachuAsync;