import React, { Component } from "react";
class Comment extends Component {
  state = {};
  render() {
    return (
      <div>
        <div>{this.props.name}</div>
        <div>{this.props.comment}</div>
        <div>{this.props.time}</div>
      </div>
    );
  }
}

export default Comment;
