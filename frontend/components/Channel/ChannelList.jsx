import React from "react";
import styles from "./ChannelList.scss";

const ChannelList = props => {
  let channelList = props.channels.map(({ id, name }) => {
    return (
      <li className={styles.channelListLi} key={id}>
        <div className={styles.channeListLiContent}>{`# ${name}`}</div>
      </li>
    );
  });
  return (
    <div className={styles.channelListContainer}>
      <div className={styles.channelListHeaderContainer}>
        <h3 className={styles.channelListHeader}>Channels</h3>
        <div className={styles.channelListHeaderPLus}>+</div>
      </div>
      <ul className={styles.channelListLiContainer}>{channelList}</ul>
    </div>
  );
};

export default ChannelList;
