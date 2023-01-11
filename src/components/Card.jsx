import React from "react";
import "./Card/Card.css";

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      age: 0,
    };
  }
  render() {
    return (
      <div className="card-container">
        <div className="card-image">
          <img src={this.props.card.image} alt={this.props.card.title} />
        </div>
        <div className="card-sub-container">
          <div className="card-title">{this.props.card.title}</div>
          <div className="card-description">{this.props.card.description}</div>
        </div>
      </div>
    );
  }
}
export default Card;
