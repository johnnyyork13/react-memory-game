import React from 'react';

export default function Card(props) {
    function handleClick(e) {
        e.preventDefault();
        console.log('clicked', props.name);
    }

    return(
        <div className="card" onClick={handleClick}>
            <img src={props.sprite} alt="Pokemon" />
            <p>{props.name.toUpperCase()}</p>
        </div>
    )
}