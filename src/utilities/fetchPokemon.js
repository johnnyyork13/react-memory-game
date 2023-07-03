export default async function fetchPokemon() {
    try {
        const amount = 670;
        let index = 0;
        let allPokemon = [];
        for (let i = 650; i < amount; i++) {
            const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
            const res = await fetch(url);
            const pokeData = await res.json();
            allPokemon.push({
                name: pokeData.name,
                id: pokeData.id,
                index: index,
                sprite: pokeData.sprites.front_default,
                clicked: false
            });
            index++;
        }
        return allPokemon;
    } catch (err) {
        console.log(err);
    }
}





