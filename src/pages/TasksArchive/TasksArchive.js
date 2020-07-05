import React from 'react';
import './TasksArchive.scss';

import ArchiveTasksListContainer from '../../containers/ArchiveTasksList.container';

const TasksArchivePage = () => {
    return (
        <div className="tasks">
            <ArchiveTasksListContainer />
        </div>
    )
}

export default TasksArchivePage;