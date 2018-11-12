import gql from "graphql-tag";

export default gql`
  query($id: ID!) {
    userChannels(workspace_id: $id) {
      id
      name
    }
  }
`;
