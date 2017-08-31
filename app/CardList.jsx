import React from 'react';
import Card from './Card.jsx';

class CardList extends React.Component {
  render() {
    return (
      <div>
        <Card
          name="Paul O'Shannessy"
          avatar_url="https://avatars.githubusercontent.com/u/8445?v3"
          company="Facebook"
        />
      </div>
    )
  }
}

export default CardList;