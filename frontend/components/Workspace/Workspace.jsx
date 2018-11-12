import React, { Component } from "react";
import ChannelList from "../Channel/ChannelList";
import styles from "./Workspace.scss";
import UserInfo from "../UserInfo/UserInfo";

class Workspace extends Component {
  render() {
    const { currentUser, workspace } = this.props;
    return (
      <div className={styles.temporary}>
        {/* <div className={styles.leftSide}>
          <div>
            {" "}
            <UserInfo currentUser={currentUser} title={workspace.name} />{" "}
          </div>
          <div>
            {" "}
            <ChannelList channels={workspace.channels} />{" "}
          </div>
        </div>
        <div className="Middle">
          <div>Messages of the channel</div>
          <div>Create a message form</div>
        </div>
        <div className="right">members</div> */}
        <p>Hello</p>
      </div>
    );
  }
}
export default Workspace;
