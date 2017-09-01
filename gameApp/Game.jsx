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
      randomNumberOfStars: 1 + Math.floor(Math.random() * 9)
    };
    this.selectNumber = this.selectNumber.bind(this);
    this.unselectNumber = this.unselectNumber.bind(this);
  }

  selectNumber(clickedNumber) {
    if (this.state.selectedNumbers.indexOf(clickedNumber) >= 0) {
      return;
    }
    this.setState(prevState => ({
      selectedNumbers: prevState.selectedNumbers.concat(clickedNumber)
    }))
  }

  unselectNumber(clickedNumber) {
    this.setState(prevState => ({
      selectedNumbers: prevState.selectedNumbers.filter(number => number != clickedNumber)
    }));
  }

  render() {
    const {randomNumberOfStars, selectedNumbers} = this.state;
    return (
      <div className="container" style={{width: '800px'}}>
        <h3>Play Nine</h3>
        <hr/>
        <div className="row" style={{width: '800px'}}>
          <Star numberOfStars={randomNumberOfStars}/>
          <Button selectedNumbers={selectedNumbers}/>
          <Answer selectedNumbers={selectedNumbers}
                  unselectNumber={this.unselectNumber}  />
        </div>
        <br />
        <Number selectedNumbers={selectedNumbers} selectNumber = {this.selectNumber}/>
      </div>
    )
  }
}

export default Game;