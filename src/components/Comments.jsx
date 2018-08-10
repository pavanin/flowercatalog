import React, { Component } from "react";
import Comment from "./Comment";

class Comments extends Component {
  render() {
    const { comments } = this.props;
    return (
      <div>
        {comments.map(comment => (
          <Comment
            key={comment.time}
            name={comment.name}
            comment={comment.comment}
            time={comment.time}
          />
        ))}
      </div>
    );
  }
}

export default Comments;
