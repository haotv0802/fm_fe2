import React from 'react';
import Star from './Star.jsx';
import Button from './Button.jsx';
import Answer from './Answer.jsx';

class Game extends React.Component {
  render() {
    return (
      <div className="container" style={{width: '800px'}}>
        <h3>Play Nine</h3>
        <hr/>
        <div className="row" style={{width: '800px'}}>
          <Star/>
          <Button/>
          <Answer/>
        </div>
      </div>
    )
  }
}

export default Game;