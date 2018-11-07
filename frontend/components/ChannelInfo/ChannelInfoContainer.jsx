import React from "react";
import { Query } from "react-apollo";
import ChannelQuery from "../../queries/Channel";
import ChannelInfo from "./ChannelInfo";

const ChannelInfoContainer = props => {
  let id = props.match.params.channelId;
  return (
    <Query query={ChannelQuery} variables={{ id }}>
      {({ loading, error, data }) => {
        if (loading || !data.channel) {
          return <div>Loading...</div>;
        }
        if (data.channel) {
          return <ChannelInfo channel={data.channel} />;
        } else {
          return "";
        }
      }}
    </Query>
  );
};

export default ChannelInfoContainer;
