import React from 'react';

function Card(props) {
    const { card } = props
    return (
         <div className="card" style={{backgroundColor: card.colour}}>
             <img src={card.src} alt={card.name}></img>
            <p>{card.name}</p>
        </div>
    );
}

export default Card;