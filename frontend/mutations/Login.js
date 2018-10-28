import gql from "graphql-tag";

export default gql`
  mutation loginUser($email: String!, $password: String!) {
    signinUser(authInputs: { email: $email, password: $password }) {
      user {
        id
      }
    }
  }
`;
