import React from 'react';

class Number extends React.Component {
  render() {
    const arrayOfNumbers = 9;
    let numbers = [];
    for (let i = 0; i < arrayOfNumbers; i++) {
      numbers.push(<span key={i} className="">{i}</span>)
    }
    return (
      <div className="card text-center">
        <div>
          {numbers}
        </div>
      </div>
    )
  }
}

export default Number;