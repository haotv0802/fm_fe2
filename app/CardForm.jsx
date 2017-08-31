import React from 'react';

class CardForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username : 'user name ....',
      age: 20
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault;
    console.log("submit clicked.");
    console.log(this.state.username);
    console.log(this.state.age);
  }

  handleOnChange(event) {
    this.setState({username: event.target.value});
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          value = {this.state.username} onChange={this.handleOnChange}
          type="text" placeholder="Type Username here." />
        <button type="submit">Add card</button>
      </form>
    )
  }
}

export default CardForm;