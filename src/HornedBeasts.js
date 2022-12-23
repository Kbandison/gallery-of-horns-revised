import React from "react";
import "./hornedBeast.css";

class HornedBeasts extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      likes: 0,
    };
  }

  upVote = () => {
    this.setState({ likes: this.state.likes + 1 });
  };

  render() {
    return (
      <div className="beasts">
        <h2>{this.props.title}</h2>
        <img src={this.props.imageURL} alt="" onClick={this.upVote}></img>
        <p>{this.props.description}</p>
        <p>Heart Here: {this.state.likes}</p>
      </div>
    );
  }
}

export default HornedBeasts;
