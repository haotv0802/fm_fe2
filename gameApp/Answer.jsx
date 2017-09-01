import React from 'react';

class Answer extends React.Component{
  render() {
    return (
      <div className="col-md-5">
        {this.props.selectedNumbers.map(
          (number, i) => <span key={i}> {number} </span>
        )}
      </div>
    )
  }
}

export default Answer;