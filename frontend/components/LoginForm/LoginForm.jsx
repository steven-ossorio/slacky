import React from "react";
import styles from "./LoginFormStyles.scss";
import NavBar from "../NavBar/NavBar";
import { Link } from "react-router-dom";

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
        <div className={styles.loginContainer}>
          <div className={styles.loginContainerBox}>
            <form className={styles.loginForm} onSubmit={this.handleSubmit}>
              <div className={styles.loginFormHeader}>Login To Slacky</div>
              <input
                type="text"
                className={styles.loginFormInput}
                placeholder="Email"
                value={this.state.email}
                onChange={this.onChange("email")}
              />
              <input
                type="password"
                className={styles.loginFormInput}
                placeholder="Password"
                value={this.state.password}
                onChange={this.onChange("password")}
              />
              <input className={styles.loginFormButton} type="submit" />
            </form>
            <div className={styles.loginFormLinks}>
              <span>Don't have an account?</span>
              <Link className={styles.loginLinkButton} to="/signup">
                Signup
              </Link>
            </div>
          </div>
        </div>
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
