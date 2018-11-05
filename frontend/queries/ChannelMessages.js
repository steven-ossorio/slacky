import gql from "graphql-tag";

export default gql`
  query($id: ID!) {
    channel(id: $id) {
      id
      messages {
        edges {
          node {
            id
            text
            postedBy {
              id
              username
            }
          }
        }
      }
    }
  }
`;
