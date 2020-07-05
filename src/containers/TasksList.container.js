import React, { Component } from "react";
import { connect } from "react-redux";

import { TasksList } from "../components";
import * as TaskApi from "../api/TaskApi";

class TasksListContainer extends Component {

    componentDidMount() {
      TaskApi.getTasks();
      TaskApi.getDeletedTasks();
    }
  
    render() {
      return (
        <>
          <TasksList tasks={this.props.tasks} deleteTask={TaskApi.deleteTask} deletedTasks={this.props.deletedTasks} deleteTaskQuantity={TaskApi.deletedTasksQuantity} confirmTask={TaskApi.confirmTask} />
        </>
      );
    }
  }
  
  const mapStateToProps = (state) => ({
    tasks: state.tasks,
    deletedTasks: state.deletedTasks,
  });
  
  export default connect(mapStateToProps)(TasksListContainer);