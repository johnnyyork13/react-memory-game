import React from 'react';
import App from '../App'

export default function Card(props) {
    const [clicked, setClicked] = React.useState(false);

    function handleClick(e) {
        if (!clicked) {
            setClicked(true);
            //App.shuffleArray()
        } else {
            console.log('Clicked Already');
        }
    }

    return(
        <div className="card" onClick={props.clicked}>
            <img src={props.sprite} alt="Pokemon" />
            <p>{props.name.toUpperCase()}</p>
        </div>
    )
}