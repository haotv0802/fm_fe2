import React from 'react';
import Card from './Card.jsx';

class CardList extends React.Component {
  render() {
    return (
      <div>
        {this.props.cards.map((card, i) => <Card key={i} {...card} />)}
      </div>
    )
  }
}

export default CardList;