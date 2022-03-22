import React, { useEffect } from 'react';
import Card from './Card';

function Cards(props) {
    const { cards, turn } = props;

    

    return (
        <div>
            {cards.map((card => {
                return (
                    <div key={card.name} onClick={() => turn(card)}>
                        <Card name={card.name}/>
                    </div>
                )
            }))}
        </div>
    );
}

export default Cards;