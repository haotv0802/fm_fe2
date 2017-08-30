import React from 'react';

class App extends React.Component {
  render() {
    var myStyle = {
      fontSize: 100,
      color: '#FF0000'
    }
    return (
      <div style={myStyle}>
        Hello World!!!
        Hello Hao
      </div>
    );
  }
}

export default App;