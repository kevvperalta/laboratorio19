function obtenerDatosPikachu() {
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = '<p>Cargando datos de Pikachu...</p>';
    
    console.log("Iniciando búsqueda de Pikachu");
    
    // Usando .then()
    fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
        .then(function(response) {
            console.log("Respuesta recibida, procesando...");
            
            if (!response.ok) {
                throw new Error('Error en la respuesta: ' + response.status);
            }
            
            return response.json();
        })
        .then(function(data) {
            // Mostrar en consola
            console.log("Altura de Pikachu:", data.height);
            console.log("Peso de Pikachu:", data.weight);
            
            //información adicional
            console.log("Nombre:", data.name);
            console.log("ID:", data.id);
            
            // Mostrando en la página
            resultadoDiv.innerHTML = `
                <h3>¡Datos de Pikachu obtenidos</h3>
                <p><strong>Nombre:</strong> ${data.name}</p>
                <p><strong>ID:</strong> ${data.id}</p>
                <p><strong>Altura:</strong> ${data.height} (unidades de la API)</p>
                <p><strong>Peso:</strong> ${data.weight} (unidades de la API)</p>
                <p><strong>Altura real:</strong> ${data.height / 10} metros</p>
                <p><strong>Peso real:</strong> ${data.weight / 10} kilogramos</p>
            `;
        })
        .catch(function(error) {
            console.error("Error:", error);
            resultadoDiv.innerHTML = `
                <p style="color: red;"><strong>Error:</strong> ${error.message}</p>
                <p>Intenta recargar la página o verifica tu conexión a internet</p>
            `;
        });
}

// Ejecutar automáticamente
window.onload = obtenerDatosPikachu;