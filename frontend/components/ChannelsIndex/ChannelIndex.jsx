import React, { Component } from "react";
import { Link } from "react-router-dom";
import styles from "./ChannelIndex.scss";
import UserInfoContainer from "../UserInfo/UserInfoContainer";

class ChannelIndex extends Component {
  render() {
    let { workspaceId } = this.props;
    let channelList = this.props.channels.map(({ id, name }) => {
      return (
        <Link key={id} to={`/workspace/${workspaceId}/channel/${id}`}>
          <li className={styles.channelListLi}>
            <div className={styles.channeListLiContent}>
              <span>#</span>
              {name}
            </div>
          </li>
        </Link>
      );
    });
    return (
      <>
        <div className={styles.channelListHeaderContainer}>
          <h1 className={styles.channelListHeader}>Channels</h1>
          <div className={styles.channelListHeaderPLus}>+</div>
        </div>
        <ul className={styles.channelListLiContainer}>{channelList}</ul>
      </>
    );
  }
}

export default ChannelIndex;
