import React from 'react';
import Axios from 'axios';

class CardForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username : 'jordwalke',
      age: 20
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault;
    // console.log("submit clicked.");
    // console.log(this.state.username);
    // console.log(this.state.age);
    Axios.get(`https://api.github.com/users/${this.state.username}`).then
    (resp => {
      console.log(resp);
      this.props.onSubmit(resp.data);
    });
  }

  handleOnChange(event) {
    this.setState({username: event.target.value});
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          // onChange={this.handleOnChange}
          value = {this.state.username} onChange={(event) => this.setState({username: event.target.value})}
          type="text" placeholder="Type Username here." />
        <button type="submit">Add card</button>
      </form>
    )
  }
}

export default CardForm;