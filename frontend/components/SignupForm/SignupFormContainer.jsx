import React from "react";
import { Mutation } from "react-apollo";
import SignupMutation from "../../mutations/Signup";
import SignupForm from "./SignupForm";

const SignupFormContainer = () => {
  return (
    <Mutation mutation={SignupMutation}>
      {mutate => {
        const signupUser = ({ username, email, password }) => {
          return mutate({ variables: { username, email, password } });
        };
        return <SignupForm signupUser={signupUser} />;
      }}
    </Mutation>
  );
};

export default SignupFormContainer;
