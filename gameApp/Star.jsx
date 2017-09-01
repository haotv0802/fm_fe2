import React from 'react';

class Star extends React.Component {
  render() {
    // const numberOfStars = 1 + Math.floor(Math.random() * 9);
    let stars = [];
    for (let i = 0; i < this.props.numberOfStars; i++) {
      stars.push(<i key={i} className="fa fa-star"></i>)
    }
    return (
      <div className="col-md-5">
        {stars}
      </div>
    )
  }
}

export default Star;