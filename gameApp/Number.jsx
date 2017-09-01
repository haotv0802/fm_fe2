import React from 'react';

class Number extends React.Component {
  constructor(props) {
    super(props);
    this.getClassNameWithNumber = this.getClassNameWithNumber.bind(this);
  }

  getClassNameWithNumber(number) {
    if (this.props.usedNumbers.indexOf(number) >= 0) {
      return 'used';
    }
    if (this.props.selectedNumbers.indexOf(number) >= 0) {
      return 'selected';
    }
  }

  render() {
    const arrayOfNumbers = 9;
    let numbers = [];
    for (let i = 1; i <= arrayOfNumbers; i++) {
      numbers.push(
        <span key={i}
              onClick={() => this.props.selectNumber(i)}
              className={this.getClassNameWithNumber(i)}>
          {i}
        </span>
      )
    }
    return (
      <div className="card text-center col-md-12">
        <div>
          {numbers}
        </div>
      </div>
    )
  }
}

export default Number;