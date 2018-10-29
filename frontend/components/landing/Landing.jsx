import React, { Component } from "react";
import { Link } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import styles from "./LandingStyles.scss";

class Landing extends Component {
  render() {
    return (
      <main className="landing-container">
        <NavBar />
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
            <form>
              <input
                className={styles.signupInput}
                placeholder="Email Address"
              />
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
            </div>
          </div>
        </main>
      </main>
    );
  }
}

export default Landing;
