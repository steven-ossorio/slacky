import React from "react";

class LoginForm extends React.Component {
  state = {
    email: "",
    password: ""
  };

  onChange = field => {
    return e => {
      this.setState({
        [field]: e.target.value
      });
    };
  };

  handleSubmit = () => {
    this.props.loginUser(this.state);
  };

  render() {
    console.log("login form rendered!");
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
        </form>
      </div>
    );
  }
}

export default LoginForm;
