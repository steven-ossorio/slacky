import React from "react";
import { Query } from "react-apollo";
import WorkspaceChannelsQuery from "../../queries/WorkspaceChannels";
import ChannelIndex from "./ChannelIndex";

const ChannelIndexContainer = props => {
  let id = props.match.params.workspaceId;
  return (
    <Query query={WorkspaceChannelsQuery} variables={{ id }}>
      {({ loading, error, data }) => {
        if (loading || !data.userChannels) {
          return <div>Loading...</div>;
        }
        if (data.userChannels) {
          return <ChannelIndex channels={data.userChannels} workspaceId={id} />;
        } else {
          return "";
        }
      }}
    </Query>
  );
};

export default ChannelIndexContainer;
