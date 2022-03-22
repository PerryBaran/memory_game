import React from 'react';

function Card(props) {
    const { name } = props
    return (
        <div className="card">
            <p>{name}</p>
        </div>
    );
}

export default Card;