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
      selectedNumbers: [2, 4]
    };
    this.selectNumber = this.selectNumber.bind(this);
  }

  selectNumber(clickedNumber) {
    if (this.state.selectedNumbers.indexOf(clickedNumber) >= 0) {
      return;
    }
    this.setState(prevState => ({
      selectedNumbers: prevState.selectedNumbers.concat(clickedNumber),
      randomNumberOfStars: 1 + Math.floor(Math.random() * 9)
    }))
  }

  render() {
    return (
      <div className="container" style={{width: '800px'}}>
        <h3>Play Nine</h3>
        <hr/>
        <div className="row" style={{width: '800px'}}>
          <Star numberOfStars={this.state.randomNumberOfStars}/>
          <Button/>
          <Answer selectedNumbers={this.state.selectedNumbers}/>
        </div>
        <br />
        <Number selectedNumbers={this.state.selectedNumbers} selectNumber = {this.selectNumber}/>
      </div>
    )
  }
}

export default Game;