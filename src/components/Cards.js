import Card from './Card';

function Cards(props) {
    const { cards, turn } = props;
    return (
        <div className="cards">
            {cards.map((card => {
                return (
                    <div key={card.name} onClick={() => turn(card)}>
                        <Card card={card}/>
                    </div>
                )
            }))}
        </div>
    );
}

export default Cards;