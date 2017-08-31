import React from 'react';

class CardForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault;
    console.log("submit clicked.");
    console.log(this.textInput.value);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          ref={(input) => { this.textInput = input; }}
          type="text" placeholder="Type Username here." />
        <button type="submit">Add card</button>
      </form>
    )
  }
}

export default CardForm;