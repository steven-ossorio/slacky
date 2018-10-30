import React from "react";
import { Mutation } from "react-apollo";
import SignupMutation from "../../mutations/Signup";
import SignupForm from "./SignupForm";
import { withRouter } from "react-router-dom";

const SignupFormContainer = props => {
  return (
    <Mutation mutation={SignupMutation}>
      {mutate => {
        const signupUser = ({ username, email, password }) => {
          return mutate({ variables: { username, email, password } });
        };
        return <SignupForm signupUser={signupUser} history={props.history} />;
      }}
    </Mutation>
  );
};

export default withRouter(SignupFormContainer);
