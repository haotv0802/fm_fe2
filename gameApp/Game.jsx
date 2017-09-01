import React from 'react';
import Star from './Star.jsx';
import Button from './Button.jsx';
import Answer from './Answer.jsx';
import Number from './Number.jsx';
import styles from './Game.css';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedNumbers: [],
      usedNumbers: [],
      randomNumberOfStars: 1 + Math.floor(Math.random() * 9),
      answerIsCorrect: null
    };
    this.selectNumber = this.selectNumber.bind(this);
    this.unselectNumber = this.unselectNumber.bind(this);
    this.checkAnswer = this.checkAnswer.bind(this);
    this.acceptAnswer = this.acceptAnswer.bind(this);
  }

  selectNumber(clickedNumber) {
    if (this.state.usedNumbers.indexOf(clickedNumber) >= 0) {
      return;
    }
    this.setState(prevState => ({
      answerIsCorrect: null,
      selectedNumbers: prevState.selectedNumbers.concat(clickedNumber)
    }))
  }

  unselectNumber(clickedNumber) {
    this.setState(prevState => ({
      answerIsCorrect: null,
      selectedNumbers: prevState.selectedNumbers.filter(number => number != clickedNumber)
    }));
  }

  checkAnswer() {
    this.setState(prevState => ({
      answerIsCorrect: prevState.randomNumberOfStars ===
      prevState.selectedNumbers.reduce((acc, n) => acc + n, 0)
    }))
  }

  acceptAnswer() {
    this.setState(
      prevState => ({
        usedNumbers: prevState.usedNumbers.concat(prevState.selectedNumbers),
        selectedNumbers: [],
        randomNumberOfStars: 1 + Math.floor(Math.random() * 9)
      })
    );
  }
  render() {
    const {randomNumberOfStars, selectedNumbers, answerIsCorrect, usedNumbers} = this.state;
    return (
      <div className="container" style={{width: '800px'}}>
        <h3>Play Nine</h3>
        <hr/>
        <div className="row" style={{width: '800px'}}>
          <Star numberOfStars={randomNumberOfStars}/>
          <Button selectedNumbers={selectedNumbers}
                  checkAnswer={this.checkAnswer}
                  answerIsCorrect={answerIsCorrect}
                  acceptAnswer={this.acceptAnswer}
          />
          <Answer selectedNumbers={selectedNumbers}
                  unselectNumber={this.unselectNumber}  />
        </div>
        <br />
        <Number selectedNumbers={selectedNumbers}
                usedNumbers={usedNumbers}
                selectNumber = {this.selectNumber}/>
      </div>
    )
  }
}

export default Game;