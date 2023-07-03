import React from 'react';

export default function Header(props) {
    
    return (
        <header>
            <h2>Score: {props.score} </h2>
            <h1><div className="poke">Poke</div>Memory</h1>
            <h2>High Score: {props.prevScore}</h2>
        </header>
    )
}