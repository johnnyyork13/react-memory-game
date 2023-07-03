import React from 'react';

export default function Card(props) {

    const style = {
        backgroundColor: props.clicked ? "red" : "white"
    }

    return (
        <div style={style} className="card" onClick={() => props.handleClick(props.index)}>
            <img src={props.sprite} alt="Pokemon" />
        </div>
    )
}