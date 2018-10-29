import React, { Component, PureComponent } from "react";
import { Link } from "react-router-dom";
import NavBarContainer from "../NavBar/NavBarContainer";
import styles from "./LandingStyles.scss";

class Landing extends Component {
  constructor() {
    super();

    this.state = {};
  }

  shouldComponentUpdate(nextProps) {
    if (this.props.currentUser !== nextProps.currentUser) {
      return true;
    }

    return false;
  }

  render() {
    const loggedOutContent = this.props.currentUser ? (
      ""
    ) : (
      <React.Fragment>
        <form>
          <input className={styles.signupInput} placeholder="Email Address" />
          <input
            type="submit"
            className={styles.signupButton}
            value="Get Started"
          />
        </form>
        <div className={styles.landingPageLinks}>
          <span>Already have an account?</span>
          <Link className={styles.landingPageButton} to="/login">
            Log In
          </Link>{" "}
          <span>or</span>
          <Link className={styles.landingPageButton} to="/login">
            Guest Login
          </Link>
          <span>or</span>
          <Link className={styles.landingPageButton} to="/signup">
            Signup
          </Link>
        </div>
      </React.Fragment>
    );

    return (
      <main className="landing-container">
        <NavBarContainer />
        <main className={styles.landingContainerMain}>
          <div className={styles.landingContainerMainLeft} />
          <div className={styles.landingContainerMainRight}>
            <p className={styles.landingContainerMainRightHeader}>
              Where It Happens
            </p>
            <p className={styles.landingContainerMainRightBody}>
              When your team needs to kick off a project, hire a new employee,
              deploy some code, review a sales contract, finalize next year's
              budget, measure an A/B test, plan your next office opening, and
              more, Slic has you covered.
            </p>
            {loggedOutContent}
          </div>
        </main>
      </main>
    );
  }
}

export default Landing;
