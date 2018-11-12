import gql from "graphql-tag";

export default gql`
  mutation($channelId: ID!, $text: String!) {
    createMessage(channel_id: $channelId, text: $text) {
      id
      text
      postedBy {
        id
        username
      }
    }
  }
`;
