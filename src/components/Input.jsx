import React, { Component } from "react";

class Input extends Component {
  render() {
    const { className, type, onChange, placeholder } = this.props;
    return (
      <input
        className={className}
        type={type}
        onChange={onChange}
        placeholder={placeholder}
      />
    );
  }
}

export default Input;
