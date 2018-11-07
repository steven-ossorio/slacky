import React from "react";
import { Mutation } from "react-apollo";
import CreateMessageMutation from "../../mutations/CreateMessage";
import MessageForm from "./MessageForm";
import { withRouter } from "react-router-dom";

const MessageFormContainer = props => {
  let id = props.match.params.channelId;

  return (
    <Mutation mutation={CreateMessageMutation}>
      {mutate => {
        const createMessage = ({ text, id }) => {
          return mutate({ variables: { text, id } });
        };
        return <MessageForm createMessage={createMessage} />;
      }}
    </Mutation>
  );
};

export default MessageFormContainer;
