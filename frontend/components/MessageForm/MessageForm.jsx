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

  handleSubmit = e => {
    e.preventDefault();
    const { channelId } = this.props;

    this.props
      .createMessage({
        channelId,
        text: this.state.text
      })
      .then(() => {
        this.setState({ text: "" });
      });
  };

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
