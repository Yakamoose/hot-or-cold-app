import React from 'react';
import './guess-form.css';

export default class GuessForm extends React.Component {
  onSubmit(event) {
    event.preventDefault();

    const value = this.input.value;
    
    this.props.onMakeGuess(value);

    this.input.value = '';
  }

  render() {
    return (
      <form onSubmit={e => this.onSubmit(e)}>
        <input
          type="number"
          id="userGuess"
          min="1"
          max="100"
          ref={input => (this.input = input)}
          required
        />
        <button
          type="submit"
          id="guessButton"
          className="button"
        >
        Guess
        </button>

      </form>
    )
  }


}
