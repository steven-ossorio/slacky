import gql from "graphql-tag";

export default gql`
  mutation {
    signoutUser {
      id
    }
  }
`;
