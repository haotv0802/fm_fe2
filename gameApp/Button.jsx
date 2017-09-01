import React from 'react';

class Button extends React.Component{
  render() {
    let button;
    switch (this.props.answerIsCorrect) {
      case true:
        button =
          <button className="btn btn-success" onClick={this.props.acceptAnswer}><i className="fa fa-check"></i></button>
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
        <br /><br />
        <button className="btn btn-warning btn-sm" onClick={this.props.refresh}>
          <i className="fa fa-refresh"></i>
        </button>
      </div>
    )
  }
}

export default Button;