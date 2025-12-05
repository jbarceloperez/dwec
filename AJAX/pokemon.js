function fetchData() {
    let nombre = document.getElementById("pokemonName").value.toLowerCase();
    fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}`)
        .then((respuesta) => {
            if (!respuesta.ok) {
                console.error(respuesta);
                throw new Error("No se pudo obtener el recurso");
            }
            return respuesta.json();
        })
        .then((data) => {
            console.log(data);
            let spritePokemon = data.sprites.front_default;
            document.getElementById("pokemonSprite").src = spritePokemon;
        })
        .catch((error) => {
            console.error("Error al obtener los datos del Pokémon:", error);
        });
}
