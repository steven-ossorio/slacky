import React from "react";
import moment from "moment";
import styles from "./MessageIndex.scss";

const MessageIndex = ({ messages }) => {
  let currentDate = "";
  let messageList = messages.map(({ node }) => {
    const { id, text, postedBy, created_at } = node;
    const { username } = postedBy;
    let dateParsed = new Date(created_at);
    let date = moment(dateParsed).format("MMM Do YY");
    let formatedDay = "";
    if (currentDate === date) {
      formatedDay = "";
    } else {
      currentDate = date;
      formatedDay = (
        <li className={styles.messageListDivider}>
          <hr className={styles.messageListDividerLine} />
          <span>{currentDate}</span>
          <hr className={styles.messageListDividerLine} />
        </li>
      );
    }

    return (
      <div key={id}>
        {formatedDay}
        <div key={id} className={styles.messageListItem}>
          <div className={styles.messageContentHeader}>
            <div>
              <span className={styles.messageContentHeaderUser}>
                {username}
              </span>
              <span className={styles.messageContentHeaderTimestamp}>
                {created_at}
              </span>
            </div>
            <div className={styles.messageContentBody}>{text}</div>
          </div>
        </div>
      </div>
    );
  });

  return <div className={styles.messageList}>{messageList}</div>;
};

export default MessageIndex;
