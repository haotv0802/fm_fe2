import React from 'react';

class Button extends React.Component{
  render() {
    let button;
    switch (this.props.answerIsCorrect) {
      case true:
        button =
          <span>
            <button className="btn btn-success"><i className="fa fa-check"></i></button>
            <button onClick={this.props.acceptAnswer} className="btn">Accept Answer</button>
          </span>
        break;
      case false:
        button =
          <button className="btn btn-danger"><i className="fa fa-times"></i></button>
        break;
      default:
        button =
          <button onClick={this.props.checkAnswer} className="btn" disabled={this.props.selectedNumbers.length === 0}>=</button>
        break;
    }
    return (
      <div className="col-md-2">
        {button}
      </div>
    )
  }
}

export default Button;