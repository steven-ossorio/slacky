import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: ""
    };
    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onChange(field) {
    return e => {
      this.setState({
        [field]: e.target.value
      });
    };
  }

  handleSubmit() {
    this.props.loginUser(this.state);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          Email:{" "}
          <input
            type="text"
            placeholder="Email"
            value={this.state.email}
            onChange={this.onChange("email")}
          />
          Password:{" "}
          <input
            type="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.onChange("password")}
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default LoginForm;
