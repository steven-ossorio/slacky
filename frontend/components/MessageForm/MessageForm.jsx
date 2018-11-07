import React, { Component } from "react";
import styles from "./MessageForm.scss";

class MessageForm extends Component {
  state = {
    text: ""
  };

  onChange = field => {
    return e => {
      this.setState({
        [field]: e.target.value
      });
    };
  };

  handleSubmit = () => {};

  render() {
    return (
      <section className={styles.messageForm}>
        <form onSubmit={this.handleSubmit}>
          <input
            className={styles.messageFormInput}
            type="text"
            placeholder="Message General"
            value={this.state.text}
            onChange={this.onChange("text")}
          />
        </form>
      </section>
    );
  }
}

export default MessageForm;
