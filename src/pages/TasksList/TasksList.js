import React from 'react';
import './TasksList.scss';

import TasksListContainer from '../../containers/TasksList.container';

const TasksListPage = () => {
    return (
        <div className="tasks">
            <TasksListContainer />
        </div>
    )
}

export default TasksListPage;