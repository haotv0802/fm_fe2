import React from 'react';

class Number extends React.Component{
  render() {
    return (
      <div className="card text-center">
        <div>
          <span>1</span>
          <span className="selected">2</span>
          <span className="used">3</span>
        </div>
      </div>
    )
  }
}

export default Number;