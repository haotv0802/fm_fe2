import React from 'react';

class DoneFrame extends React.Component {
  render() {
    return (
      <div className="text-center">
        <h2>{this.props.doneStatus}</h2>
        <button className="btn btn-secondary" onClick={this.props.reset}>
          Play Again
        </button>
      </div>
    )
  }
}

export default DoneFrame;