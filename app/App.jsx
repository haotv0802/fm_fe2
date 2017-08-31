import React from 'react';
import Card from './Card.jsx';
let data = [
  {
    name: "Paul O'Shannessy",
    avatar_url: "https://avatars.githubusercontent.com/u/8445?v3",
    company: "Facebook"
  },
  {
    name: "Ben Alpert",
    avatar_url: "https://avatars.githubusercontent.com/u/6820?v3",
    company: "Facebook"
  }
];

class App extends React.Component {

  render() {
    return (
      <div>
        <Card
          name="Paul O'Shannessy"
          avatar_url="https://avatars.githubusercontent.com/u/8445?v3"
          company="Facebook"
        />
      </div>
    );
  }
}
export default App;