import React from 'react';

class Number extends React.Component {
  constructor(props) {
    super(props);
    this.getClassNameWithNumber = this.getClassNameWithNumber.bind(this);
  }

  getClassNameWithNumber(number) {
    if (this.props.selectedNumbers.indexOf(number) >= 0) {
      return 'selected';
    } else {
      return '';
    }
  }

  render() {
    const arrayOfNumbers = 9;
    let numbers = [];
    for (let i = 0; i < arrayOfNumbers; i++) {
      numbers.push(<span key={i} className={this.getClassNameWithNumber(i)}>{i}</span>)
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