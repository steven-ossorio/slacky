import gql from "graphql-tag";

export default gql`
  query workspace($id: ID!) {
    workspace(id: $id) {
      id
      name
    }
  }
`;
