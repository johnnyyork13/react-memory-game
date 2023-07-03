import React from 'react';

export default function Card(props) {

    return (
        <div className="card" onClick={() => props.handleClick(props.index)}>
            <img src={props.sprite} alt="Pokemon" />
        </div>
    )
}