import React from 'react';

import Nav from './nav';
import GuessForm from './guess-form';

export default class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      guesses: [],
      feedback: 'Make your guess',
      magicNumber: Math.round(Math.random() * 100) + 1
    }
  }

  restartGame() {
    this.setState ({
      guesses: [],
      feedback: 'Make your guess',
      magicNumber: Math.round(Math.random() * 100) + 1
    });
  }

  makeGuess(guess) {

    let difference = Math.abs(guess - this.state.magicNumber);

    let feedback;
    if (difference >= 50) {
      feedback = 'You\'re Ice Cold...';
    } else if (difference >= 30) {
      feedback = 'You\'re Cold...';
    } else if (difference >= 10) {
      feedback = 'You\'re Warm.';
    } else if (difference >= 1) {
      feedback = 'You\'re Hot!';
    } else {
      feedback = 'You got it!';
    }

    this.setState({
      feedback,
      guesses: [...this.state.guesses, guess]
    });

    // document.title = feedback ? `${feedback} | Hot or Cold` : 'Hot or Cold';
  }



  render() {
    const {guesses} = this.state;
    const guessCount = guesses.length;

    return (
      <div>
        <Nav onRestartGame={() => this.restartGame()}/>
        <h1>HOT or COLD?</h1>

        <main role="main">

          <h2>{this.state.feedback}</h2>

          <div className="guess-container">
            <GuessForm onMakeGuess={guess => this.makeGuess(guess)} />
          </div>

          <div className="guess-count">
            <h5>Guess #{guessCount}</h5>
            <p>{guesses +','}</p>
          </div>
        </main>
      </div>

    );
  }
}
