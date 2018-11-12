import React, { Component } from "react";

class WorkspaceIndex extends Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.history.push({
        pathname: `/workspace/${
          this.props.match.params.id
        }/channel/${"general"}`
      });
    }, 1500);
  }

  render() {
    return (
      <div>
        <h1>THERE IS A SPINNER HERE!</h1>
      </div>
    );
  }
}

export default WorkspaceIndex;
