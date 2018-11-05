import gql from "graphql-tag";

export default gql`
  query {
    current_user {
      id
      workspaces {
        id
        name
      }
    }
  }
`;
