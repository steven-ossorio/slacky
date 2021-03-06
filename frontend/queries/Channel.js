import gql from "graphql-tag";

export default gql`
  query($id: ID!) {
    channel(id: $id) {
      id
      name
      members {
        id
        username
      }
    }
  }
`;
