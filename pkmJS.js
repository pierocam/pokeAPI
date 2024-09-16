const pokemonContainer = document.getElementById('pokemon-container');

// Función para obtener los datos 
async function fetchPokemon() {
    try {
        for (let i = 1; i <= 151; i++) { // Obtener los primeros 150 pokémones
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
            const pokemon = await response.json();
            createPokemonCard(pokemon);
        }
    } catch (error) {
        console.error("Error al traer información del Pokémon:", error);
    }
}

// Función para crear una tarjeta con los datos 
function createPokemonCard(pokemon) {
    const card = document.createElement('div');
    card.classList.add('card');
    
    
    const pokemonName = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
    
    card.innerHTML = `
        <img src="${pokemon.sprites.front_default}" alt="${pokemonName}">
        <h2>${pokemonName}</h2>
        <p>#: ${pokemon.id}</p>
        <p>Tipo: ${pokemon.types.map(type => type.type.name).join(', ')}</p>
    `;
    console.log(pokemon.id,pokemonName); 
    
           
    pokemonContainer.appendChild(card);
}

// Ejecutar la función al cargar la página
fetchPokemon();