import React from 'react';

class Card extends React.Component{
  render() {
    return (
      <div>
        <img src="http://placehold.it/75"/>
        <div style={{display: 'inline-block', marginLeft: 10}}>
          <div style={{fontSize: '1.25em', fontWeight: 'bold'}}>
            {this.props.name}
          </div>
          <div>{this.props.company}</div>
        </div>
      </div>
    )
  }
}

export default Card;