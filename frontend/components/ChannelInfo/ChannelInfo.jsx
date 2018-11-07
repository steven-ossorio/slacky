import React from "react";
import styles from "./ChannelInfo.scss";

const ChannelInfo = ({ channel }) => {
  return (
    <div className={styles.channelHeaderContainer}>
      <div className={styles.channelHeaderAndUserCount}>
        <div className={styles.channelHeader}>
          <span>#</span>
          {channel.name}
        </div>
        <div className={styles.channelUserCount}>
          <i className="fa fa-user-o" aria-hidden="true" />
          <span>{channel.members.length}</span>
        </div>
      </div>
    </div>
  );
};

export default ChannelInfo;
