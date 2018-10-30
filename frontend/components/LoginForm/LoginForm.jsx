import React from "react";
import styles from "./LoginFormStyles.scss";
import NavBar from "../NavBar/NavBar";
import { Link } from "react-router-dom";
import LogoutButton from "../LogoutButton/LogoutButtonContainer";

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
    this.props
      .loginUser(this.state)
      .then(user => {
        if (user) {
          this.props.history.push("/");
        }
      })
      .catch(err => console.log(err));

    this.setState({
      email: "",
      password: ""
    });
  };

  render() {
    let signedIn = this.props.currentUser ? <LogoutButton /> : "";
    return (
      <div>
        <NavBar />
        {signedIn}
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

export default LoginForm;
