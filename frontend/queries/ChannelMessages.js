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
            created_at
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
