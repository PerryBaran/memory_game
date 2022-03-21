import React from 'react';

function Scoreboard(props) {
    const { highscore, score } = props
    return (
        <div>
            <div>
                <h2>High Score</h2>
                <p>{highscore}</p>
            </div>
            <div>
                <h2>Current Score</h2>
                <p>{score}</p>
            </div>
        </div>
    );
}

export default Scoreboard;