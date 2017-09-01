import React from 'react';
import Star from './Star.jsx';
import Button from './Button.jsx';
import Answer from './Answer.jsx';
import Number from './Number.jsx';
import styles from './Game.css';
import DoneFrame from "./DoneFrame.jsx";

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = Game.initializeState();
    this.selectNumber = this.selectNumber.bind(this);
    this.unselectNumber = this.unselectNumber.bind(this);
    this.checkAnswer = this.checkAnswer.bind(this);
    this.acceptAnswer = this.acceptAnswer.bind(this);
    this.refresh = this.refresh.bind(this);
    this.reset = this.reset.bind(this);
  }

  static initializeState() {
    return {
      selectedNumbers: [],
      usedNumbers: [],
      randomNumberOfStars: Game.randomNumber(),
      answerIsCorrect: null,
      refreshTimes: 5,
      doneStatus: undefined,
      arrayOfNumbers: 9
    };
  }

  reset() {
    console.log("play again");
    this.setState (Game.initializeState());
  }

  static randomNumber() {
    return 1 + Math.floor(Math.random() * 9);
  }

  selectNumber(clickedNumber) {
    if (this.state.usedNumbers.indexOf(clickedNumber) >= 0 || this.state.selectedNumbers.indexOf(clickedNumber) >= 0) {
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
    console.log("randomNumberOfStars: " + this.state.randomNumberOfStars);
    this.setState(
      prevState => ({
        usedNumbers: prevState.usedNumbers.concat(prevState.selectedNumbers),
        selectedNumbers: [],
        answerIsCorrect: null,
        randomNumberOfStars: Game.randomNumber()
      }), () => {
        console.log("randomNumberOfStars: " + this.state.randomNumberOfStars);
        console.log("doneStatus: " + this.state.doneStatus);
        if (this.state.usedNumbers.length === this.state.arrayOfNumbers) {
          this.state.doneStatus = 'Done Nice !';
        }
        let numbersArray = new Array(this.state.arrayOfNumbers);
        console.log(numbersArray);

        let isPossible = false;
        for (let i = 1; i <= numbersArray.length; i++) {
          if (this.state.usedNumbers.indexOf(i) >= 0) {
            isPossible = true;
            break;
          }
        }
        if (!isPossible) {
          this.state.doneStatus = 'Game Over!';
        }
        console.log("doneStatus: " + this.state.doneStatus);
      }
    );
  }

  refresh() {
    if (this.state.refreshTimes === 0) {
      return;
    }
    this.setState(prevState => ({
      selectedNumbers: [],
      answerIsCorrect: null,
      randomNumberOfStars: Game.randomNumber(),
      refreshTimes: prevState.refreshTimes - 1
    }))
  }
  render() {
    const {randomNumberOfStars,
      selectedNumbers,
      answerIsCorrect,
      usedNumbers,
      refreshTimes,
      doneStatus,
      arrayOfNumbers
    } = this.state;
    return (
      <div className="container" style={{width: '700px'}}>
        <h3>Play Nine</h3>
        <hr/>
        <div className="row" style={{height: '100px'}}>
          <Star numberOfStars={randomNumberOfStars}/>
          <Button selectedNumbers={selectedNumbers}
                  checkAnswer={this.checkAnswer}
                  answerIsCorrect={answerIsCorrect}
                  acceptAnswer={this.acceptAnswer}
                  refresh={this.refresh}
                  refreshTimes={refreshTimes}
          />
          <Answer selectedNumbers={selectedNumbers}
                  unselectNumber={this.unselectNumber}  />
        </div>
        <br />
        <div className="row">
          {
            doneStatus === undefined ?
            <Number selectedNumbers={selectedNumbers}
                    usedNumbers={usedNumbers}
                    selectNumber={this.selectNumber}
                    arrayOfNumbers={arrayOfNumbers}
            /> : <DoneFrame doneStatus={doneStatus} reset={this.reset}/>
          }
        </div>
        <br/>

      </div>
    )
  }
}

export default Game;