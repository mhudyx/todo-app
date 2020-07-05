import React, { Component } from 'react';
import { connect } from "react-redux";
import './Home.scss';

import { TaskStats } from '../../components'
import * as TaskApi from '../../api/TaskApi';

class HomePage extends Component {

    componentDidMount() {
        TaskApi.getTasks();
        TaskApi.getArchiveTasks();
        TaskApi.getDeletedTasks();
    }

    render() {
        return (
            <div className="home">
               <TaskStats tasks={this.props.tasks} archiveTasks={this.props.archiveTasks} deletedTasks={this.props.deletedTasks}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    tasks: state.tasks,
    archiveTasks: state.archiveTasks,
    deletedTasks: state.deletedTasks,
  });

export default connect(mapStateToProps)(HomePage);