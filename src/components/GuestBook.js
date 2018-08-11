import React, { Component } from "react";
import Comments from "./Comments";
import Input from "./Input";
import "./index.css";
import TextArea from "./TextArea";
import Button from "./Button";

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
        <div className="inputs">
          <Input
            className="m-2"
            type="text"
            onChange={this.handleNameChange}
            placeholder="name"
          />
          <TextArea
            className="m-2"
            type="text"
            onChange={this.handleCommentChange}
            placeholder="comment"
          />
          <Button
            className="btn btn-info m-2"
            onClick={this.handleComment}
            text="Comment"
          />
        </div>
        <div>
          <Comments comments={this.state.comments} />
        </div>
      </div>
    );
  }
}

export default GuestBook;
