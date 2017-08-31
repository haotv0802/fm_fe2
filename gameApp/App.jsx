import React from 'react';
import Game from './Game.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cards: [
        // {
        //   name: "Paul O'Shannessy",
        //   avatar_url: "https://avatars.githubusercontent.com/u/8445?v3",
        //   company: "Facebook"
        // },
        // {
        //   name: "Ben Alpert",
        //   avatar_url: "https://avatars.githubusercontent.com/u/6820?v3",
        //   company: "Facebook"
        // }
      ]
    };
  }

  render() {
    return (
      <div>
        <Game />
      </div>
    );
  }
}

export default App;