async function mostrarSpriteCharizard() {
    const resultadoDiv = document.getElementById('resultado');
    
    resultadoDiv.innerHTML = '<p>Cargando información de Charizard...</p>';
    
    try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/charizard");
        
        if (!response.ok) {
            throw new Error('error al obtener datos de Charizard');
        }
        
        const data = await response.json();
        
        // Obtener la URL
        const spriteUrl = data.sprites.front_default;
        
        //información adicional
        console.log("Nombre:", data.name);
        console.log("ID:", data.id);
        
        // Mostrar en la página
        resultadoDiv.innerHTML = `
            <h3>¡Charizard encontrado!</h3>
            <p><strong>Nombre:</strong> ${data.name}</p>
            <p><strong>ID:</strong> ${data.id}</p>
            <p>La URL del sprite frontal se ha mostrado en la consola</p>
            <p><strong>URL:</strong> ${spriteUrl}</p>
        `;
        
    } catch (error) {
        console.error("Error:", error);
        resultadoDiv.innerHTML = `<p style="color: red;"><strong>Error:</strong> ${error.message}</p>`;
    }
}

// Ejecutar automáticamente
window.onload = mostrarSpriteCharizard;