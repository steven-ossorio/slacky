import React, { Component } from "react";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";
import query from "../queries/CurrentUser";
import mutation from "../mutations/Login";
import { graphql } from "react-apollo";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      errors: []
    };

    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidUpdate(nextProps) {
    // if (!this.props.data.user && nextProps.data.user) {
    //   hashHistory.push("/");
    // }
  }

  onSubmit(e) {
    e.preventDefault();
    let email = this.state.email;
    let password = this.state.password;
    this.props
      .mutate({
        variables: { email, password },
        refetchQueries: [{ query }]
      })
      .catch(err => {
        const errors = err.graphQLErrors.map(err => {
          return err.message;
        });

        this.setState({ errors });
      });
  }

  render() {
    console.log(this.props);
    console.log(this.state);
    return (
      <div>
        <NavBar />
        <div className="login-container">
          <div className="login-container-box">
            <form className="login-container-box-form">
              <div className="login-container-box-form-header">
                Login To Slacky
              </div>
              <input
                className="login-container-box-form-input"
                placeholder="Email Address"
                value={this.state.email}
                onChange={e => this.setState({ email: e.target.value })}
              />
              <input
                className="login-container-box-form-input"
                placeholder="Password"
                value={this.state.password}
                onChange={e => this.setState({ password: e.target.value })}
              />
              <input
                className="login-container-box-form-button"
                type="submit"
                value="Login"
                onClick={this.onSubmit}
              />
            </form>
            <div className="login-container-box-links">
              <span>Don't have an account?</span>
              <Link className="login-container-box-links-button" to="/signup">
                Sign Up
              </Link>{" "}
              <span>or</span>
              <Link className="login-container-box-links-button" to="/login">
                Guest Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default graphql(query)(graphql(mutation)(Login));
