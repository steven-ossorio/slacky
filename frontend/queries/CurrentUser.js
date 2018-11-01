import gql from "graphql-tag";

export default gql`
  query {
    current_user {
      id
      username
      workspaces {
        id
        name
      }
    }
  }
`;
