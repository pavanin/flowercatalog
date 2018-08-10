import React, { Component } from "react";

class TextArea extends Component {
  render() {
    const { className, type, onChange, placeholder } = this.props;
    return (
      <textarea
        className={className}
        type={type}
        onChange={onChange}
        placeholder={placeholder}
      />
    );
  }
}

export default TextArea;
