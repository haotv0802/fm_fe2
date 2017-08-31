import React from 'react';

class CardForm extends React.Component {
  render() {
    return (
      <form>
        <input type="text" placeholder="Type Username here." />
        <button type="submit">Add card</button>
      </form>
    )
  }
}

export default CardForm;