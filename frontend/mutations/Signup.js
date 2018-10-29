import gql from "graphql-tag";

export default gql`
  mutation signinUser($username: String!, $email: String!, $password: String!) {
    createUser(
      username: $username
      authProvider: { email: $email, password: $password }
    ) {
      id
    }
  }
`;
