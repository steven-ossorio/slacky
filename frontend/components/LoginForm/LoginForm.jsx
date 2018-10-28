import React from "react";
import styles from "./LoginFormStyles.scss";
import NavBar from "../NavBar/NavBar";

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
        <NavBar />

        <form onSubmit={this.handleSubmit}>
          <label className={styles.formLabel}>Email:</label>
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

{
  /* <div>
  <NavBar />
  <div className="login-container">
    <div className="login-container-box">
      <form className="login-container-box-form">
        <div className="login-container-box-form-header">Login To Slacky</div>
        <input
          className="login-container-box-form-input"
          placeholder="Email Address"
        />
        <input
          className="login-container-box-form-input"
          placeholder="Username"
        />
        <input
          className="login-container-box-form-input"
          placeholder="Password"
        />
        <input
          className="login-container-box-form-button"
          type="submit"
          value="Login"
        />
      </form>
      <div className="login-container-box-links">
        <span>Already have an account?</span>
        <Link className="login-container-box-links-button" to="/login">
          Login
        </Link>{" "}
        <span>or</span>
        <Link className="login-container-box-links-button" to="/login">
          Guest Login
        </Link>
      </div>
    </div>
  </div>
</div>; */
}

export default LoginForm;
