import React, { Component } from "react";
import { Link } from "react-router-dom";
import styles from "./ChannelIndex.scss";

class ChannelIndex extends Component {
  render() {
    let { workspaceId } = this.props;
    let channelList = this.props.channels.map(({ id, name }) => {
      return (
        <Link key={id} to={`/workspace/${workspaceId}/channel/${id}`}>
          <li className={styles.channelListLi}>
            <div className={styles.channeListLiContent}>{`# ${name}`}</div>
          </li>
        </Link>
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
  }
}

export default ChannelIndex;
