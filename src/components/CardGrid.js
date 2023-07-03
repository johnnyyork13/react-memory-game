import React from 'react';
import Card from './Card';
import shuffleArray from '../utilities/shuffle';
import fetchPokemon from '../utilities/fetchPokemon';
import showTenCards from '../utilities/showTenCards';

export default function CardGrid(props) {
    
    const [cardList, setCardList] = React.useState([]);

    React.useEffect(() => {
        const pokeData = fetchPokemon();
        pokeData.then((data) => {
            setCardList(function() {
                return data;
            })
        })
    }, [props.checkGameover]);


    function handleClick(index) {
        if (cardList[index].clicked) {
            props.isGameover();
        } else {
            props.increaseScore();
            setCardList(function(oldList) {
                let newList = [];
                for (const cards in oldList) {
                    if (oldList[cards].index === index) {
                        newList.push({
                            ...oldList[cards],
                            clicked: true
                        })
                    } else {
                        newList.push({
                            ...oldList[cards]
                        })
                    }
                }
                return newList;
            })
        }
        
    }

    const mappedCards = () => {
        const cards = [];
        for (const card in cardList) {
            cards.push(
            <Card 
                key={card} 
                index={cardList[card].index}
                sprite={cardList[card].sprite} 
                clicked={cardList[card].clicked} 
                handleClick={handleClick}/>)
        }

        shuffleArray(cards);
        let tenCards = showTenCards(cards);
        return tenCards;
    }

    return(
        <div className="card-grid-container">
            {mappedCards()}
        </div>
    )
}