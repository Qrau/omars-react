import React from "react";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";

class MyInput extends React.Component {
  constructor() {
    super();
    this.textInput = React.createRef();
  }

  static propTypes = {
    send: PropTypes.func,
  };

  render() {
    const { send } = this.props;
    return (
      <React.Fragment>
        <input placeholder="Type a message..." ref={this.textInput} />
        <button
          onClick={() => send(this.textInput.current.value)}
          className="icon"
        >
          search brand
        </button>
      </React.Fragment>
    );
  }
}

export default MyInput;
