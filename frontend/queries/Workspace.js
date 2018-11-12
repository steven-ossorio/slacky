import gql from "graphql-tag";

export default gql`
  query workspace($id: ID!) {
    workspace(id: $id) {
      id
      name
      channels {
        id
        name
      }
      members {
        id
        username
      }
    }
  }
`;
