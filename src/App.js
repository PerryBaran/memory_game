import React, { Component } from 'react';
import Cards from './components/Cards';
import cards from './cardArray';
import Scoreboard from './components/Scoreboard';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      highScore: 0,
      score: 0,
      cards: cards,
      selectedCards: [],
      turn: this.turn
    }
  }

  componentDidMount() {
    this.randomizeCards()
  }

  randomizeCards = () => {
    const array = this.state.cards
    const length = array.length
    const newArray = [];
    while (newArray.length !== length) {
      const randomNumber = Math.floor(Math.random() * array.length);
      //used to use and if statement but have gone with a splice method for faster code
      newArray.push(array[randomNumber])
      array.splice(randomNumber, 1)
    }
    this.setState({
      cards: newArray
    });
  }

  turn = (card) => {
    let selectedCards = this.state.selectedCards
    if (selectedCards.includes(card)) {
      this.setState({
        score: 0,
        selectedCards: [],
      })
    } else {
      const score = this.state.score + 1
      let highScore = this.state.highScore
      if (highScore < score) {
        highScore = score
      }
      selectedCards.push(card)
      if (selectedCards.length === this.state.cards.length) {
        selectedCards = []
      }
      this.setState({
        highScore: highScore,
        score: score,
        selectedCards: selectedCards
      });
    }
    
    this.randomizeCards()
  }

  render(){
    return (
      <div>
        <div className="rules">
          <h1>The Officially Unofficial JoJo's Bizzare Adventure Memory Game</h1>
          <p>Rules: Score points by selecting a card, you lose if you select the same card twice. Cards are randomized each turn. After all cards have been selected game restarts but scoring continues.</p>
          <p>Created by <a href="https://github.com/PerryBaran">Perry Baran</a></p>
        </div>
        <div>
          <Scoreboard highScore={this.state.highScore} score={this.state.score}/>
        </div>
        <div>
          <Cards cards={this.state.cards} turn={this.state.turn}/>
        </div>
      </div>
    );
  }
}

export default App;
