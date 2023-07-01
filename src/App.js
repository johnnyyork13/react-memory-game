import './App.css';
import React from 'react';
import Header from './components/Header'
import Card from './components/Card'

function App() {
  console.log('App called');

  const [pokeList, setPokeList] = React.useState([]);

  React.useEffect(() => {
    const loadCards = async () => {
      fetchPokemon(shuffleArray);
    }

    loadCards()
  }, [])

  function checkList() {
    console.log(pokeList);
  }

  function shuffleArray() {
    console.log('shuffled');
    setPokeList((pokeList) => {
      for (let i = pokeList.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [pokeList[i], pokeList[j]] = [pokeList[j], pokeList[i]];
      }
      return pokeList;
    })
  }
  
  async function fetchPokemon(resolve, reject) {
      let pokeList = [];
      for (let i = 554; i < 584; i++) {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
        const pokemon = await response.json()
        setPokeList((old) => ([
            ...old,
            {
              name: pokemon.name,
              sprite: pokemon.sprites.front_default,
              clicked: false 
            }
          ]))
      }
      resolve(pokeList);
  }
  
  const cards = pokeList.map(function(pokemon, index) {
    let card;
    console.log('rendered');
    if (index < 9) {
      card = (<Card 
        key={index}
        name={pokemon.name}
        sprite={pokemon.sprite}
      />)
    }
    return card;
  })

  return (
    <div className="main-container">
      <Header />
      <div className="card-container">
        {cards}
      </div>
      <button onClick={checkList}>Check</button>
      <button onClick={() => shuffleArray(pokeList)}>Shuffle</button>
    </div>
  );
}

export default App;
