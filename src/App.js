import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      highScore: 0,
      score: 0,
    }
  }

  render() {
    return (
      <div>
        <div>
          <h1>The Official JoJo's Bizzare Adventure Unofficial Memory Game</h1>
          <p>Rules: Score points by selecting a card, you lose if you select the same card twice. Cards are randomized each turn.</p>
        </div>
      </div>
    );
  }
}

export default App;

//--plan--
//make array of cards - name and images
//import this array into app
//create function to randomise array
//create 2nd empty array
//when card is selected - check if card is in 2nd array, if no add to array, if yes reset game
//if score > highscore update highscore
//2nd array is emptied and game continues if 2nd array.length === 1st array.length
