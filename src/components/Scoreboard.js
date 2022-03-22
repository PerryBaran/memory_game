import React from 'react';

function Scoreboard(props) {
    const { highScore, score } = props
    return (
        <div>
            <div>
                <h2>High Score</h2>
                <p>{highScore}</p>
            </div>
            <div>
                <h2>Current Score</h2>
                <p>{score}</p>
            </div>
        </div>
    );
}

export default Scoreboard;