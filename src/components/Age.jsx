import React from "react";
import "./Card/Card.css";

class Age extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          age: 0,
        };
      }
  render() {
    return (
      <div>
        <div className="age-container">
            <div className="age-inner">
                <label> Enter Your Age:</label>
                <input
                    type="number"
                    value={this.state.age}
                    onChange={(event) => {
                    // let newState = {
                    //     ...this.state,
                    //     age: event.target.value,
                    // }
                    // this.setState(newState)

                    this.setState({
                        ...this.state,
                        age: event.target.value >= 0 ? event.target.value : 0,
                    });
                    }}
                />
                    
                <h1>Your age is {this.state.age}</h1>
                {/* {age === 0? "You are not yet born" : ""} */}
                {this.state.age === 0 && "You are not yet born!"}
                {this.state.age <= 12 && this.state.age > 0 && (
                    <h1>You are kid Enjoy</h1>
                )}
                {this.state.age <= 19 && this.state.age > 12 && (
                    <h1>You are teenager! Learn from your mistakes</h1>
                )}

                {this.state.age > 19 && <h1>Welcome to adulthood</h1>}
            </div>
        </div>
      </div>
    );
  }
}
export default Age;
