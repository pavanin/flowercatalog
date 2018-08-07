import React, { Component } from "react";
import Comments from "./Comments";
// import InputBox from "./Input";

class GuestBook extends Component {
  state = {
    comments: [
      {
        name: "Name",
        comment: "Comment",
        time: "Time"
      }
    ],
    name: "",
    comment: ""
  };

  handleCommentChange = event => {
    this.setState({ comment: event.target.value });
  };
  handleNameChange = event => {
    this.setState({ name: event.target.value });
  };

  handleComment = () => {
    const comments = this.state.comments;
    const newComment = {
      name: this.state.name,
      comment: this.state.comment,
      time: new Date().toLocaleString()
    };
    comments.push(newComment);
    this.setState({ comments });
  };

  render() {
    return (
      <div className="container">
        <input
          className="m-2"
          type="text"
          onChange={this.handleNameChange}
          placeholder="name"
        />
        <br />
        <textarea
          className="m-2"
          type="text"
          onChange={this.handleCommentChange}
          placeholder="comment"
        />
        <br />
        <button className="btn btn-info m-2" onClick={this.handleComment}>
          Comment
        </button>
        <Comments comments={this.state.comments} />
      </div>
    );
  }
}

export default GuestBook;
