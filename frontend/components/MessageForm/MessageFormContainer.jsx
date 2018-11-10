import React from "react";
import { Mutation } from "react-apollo";
import CreateMessageMutation from "../../mutations/CreateMessage";
import MessageForm from "./MessageForm";
import { withRouter } from "react-router-dom";

const MessageFormContainer = props => {
  let channelId = props.match.params.channelId;

  return (
    <Mutation mutation={CreateMessageMutation}>
      {mutate => {
        const createMessage = ({ text, channelId }) => {
          return mutate({ variables: { text, channelId } });
        };
        return (
          <MessageForm createMessage={createMessage} channelId={channelId} />
        );
      }}
    </Mutation>
  );
};

export default MessageFormContainer;
