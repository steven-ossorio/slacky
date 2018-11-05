import React from "react";
import { Query } from "react-apollo";
import ChannelMessagesQuery from "../../queries/ChannelMessages";
import MessageIndex from "./MesssageIndex";

const MessageIndexContainer = props => {
  console.log(props);
  let id = props.match.params.channelId;
  return (
    <Query query={ChannelMessagesQuery} variables={{ id }}>
      {({ loading, error, data }) => {
        console.log(data);
        if (loading || !data.channel) {
          return <div>Loading...</div>;
        }
        if (data.channel) {
          return <MessageIndex messages={data.channel.messages.edges} />;
        } else {
          return "";
        }
      }}
    </Query>
  );
};
export default MessageIndexContainer;
