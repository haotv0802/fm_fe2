import React from 'react';

class Button extends React.Component{
  render() {
    return (
      <div className="col-md-2">
        <button className="btn" disabled={this.props.selectedNumbers.length === 0}>=</button>
      </div>
    )
  }
}

export default Button;