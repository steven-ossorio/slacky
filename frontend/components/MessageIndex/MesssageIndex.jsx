import React from "react";

const MesssageIndex = ({ messages }) => {
  console.log(messages);
  let messageList = messages.map(({ node }) => {
    const { id, text, postedBy } = node;
    const { username } = postedBy;

    return (
      <li key={id}>
        <div>{username}</div>
        <div>{text}</div>
      </li>
    );
  });
  return (
    <div>
      <h1>HELLO</h1>
      <br />
      <ul>{messageList}</ul>
    </div>
  );
};

export default MesssageIndex;
