let pokemons = [];
let pagina = 1;
const porPagina = 3;

async function cargarPokemons() {
    const cargandoDiv = document.getElementById('cargando');
    
    try {
        for (let i = 1; i <= 12; i++) {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
            if (response.ok) {
                const data = await response.json();
                pokemons.push(data);
            }
        }
        
        cargandoDiv.style.display = 'none';
        mostrarPagina();
        
    } catch (error) {
        console.error("Error:", error);
        cargandoDiv.innerHTML = 'Error al cargar';
    }
}

function mostrarPagina() {
    const container = document.getElementById('pokemonContainer');
    const paginaInfo = document.getElementById('paginaInfo');
    
    const inicio = (pagina - 1) * porPagina;
    const fin = inicio + porPagina;
    const pokemonsPagina = pokemons.slice(inicio, fin);
    
    paginaInfo.textContent = `Página ${pagina} de 4`;
    container.innerHTML = '';
    
    pokemonsPagina.forEach(pokemon => {
        const imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`;
        
        container.innerHTML += `
            <div style="border:1px solid black; padding:10px; margin:10px; text-align:center; display:inline-block;">
                <h3>${pokemon.name}</h3>
                <img src="${imgUrl}" alt="${pokemon.name}" width="100">
                <p>ID: ${pokemon.id}</p>
            </div>
        `;
    });
}

function siguiente() {
    if (pagina < 4) {
        pagina++;
        mostrarPagina();
    }
}

function anterior() {
    if (pagina > 1) {
        pagina--;
        mostrarPagina();
    }
}

window.onload = cargarPokemons;