import React, { Component } from "react";
import { connect } from "react-redux";

import { ArchiveTasksList } from "../components";
import * as TaskApi from "../api/TaskApi";

class ArchiveTasksListContainer extends Component {
    componentDidMount() {
      TaskApi.getArchiveTasks();
    }
  
    render() {
      return (
        <>
          <ArchiveTasksList archiveTasks={this.props.archiveTasks} />
        </>
      );
    }
  }
  
  const mapStateToProps = (state) => ({
    archiveTasks: state.archiveTasks,
  });
  
  export default connect(mapStateToProps)(ArchiveTasksListContainer);