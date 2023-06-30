import './App.css';
import React from 'react';
import Card from './components/Card'

function App() {

  const [pokeList, setPokeList] = React.useState([]);

  React.useEffect(() => {
    const loadCards = async () => {
      fetchPokemon(handleFetchSuccess);
    }

    loadCards()
  }, [])

  function checkList() {
    console.log(pokeList);
  }

  function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }
  
  async function fetchPokemon(resolve, reject) {
      let pokeList = [];
      for (let i = 554; i < 584; i++) {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
        const pokemon = await response.json()
        console.log(pokemon);
        pokeList.push({name: pokemon.name, sprite: pokemon.sprites.front_default, clicked: false}); 
      }
      resolve(pokeList);
  }
  
  function handleFetchSuccess(pokeList) {
    setPokeList(function() {
      return shuffleArray(pokeList);
    });
  }
  
  const cards = pokeList.map(function(pokemon, index) {
    let card;
    if (index < 9) {
      card = (<Card 
        key={index}
        name={pokemon.name}
        sprite={pokemon.sprite}
        clicked={pokemon.clicked}
      />)
    }
    return card;
  })

  return (
    <div className="main-container">
      <div className="card-container">
        {cards}
      </div>
      <button onClick={checkList}>Check</button>
    </div>
  );
}

export default App;
