import React from 'react';
import PropTypes from 'prop-types';

let urgentTasks = [];

const TaskStats = ({ tasks, archiveTasks, deletedTasks }) => {

    urgentTasks = tasks.filter(task => task.priority === 'high');

    const todaysDate = new Date();

    function convertDate(date) {
        const yyyy = date.getFullYear().toString();
        const mm = (date.getMonth()+1).toString();
        const dd = date.getDate().toString();

        const mmChars = mm.split('');
        const ddChars = dd.split('');

        return yyyy + '-' + (mmChars[1]?mm:"0"+mmChars[0]) + '-' + (ddChars[1]?dd:"0"+ddChars[0]);
    }

    const date = convertDate(todaysDate);

    return (
        <>
            <div className="home__about">
                <p>{date}</p>
            </div>
            <div className="home__summary">
                <div>
                    <h2>
                        Pending tasks
                    </h2>
                    <p>
                        {tasks.length}
                    </p>
                    
                </div>
                <div>
                    <h2>
                        Important tasks
                    </h2>
                    <p>
                        {urgentTasks.length}
                    </p>
                </div>
                <div>
                    <h2>
                        Completed tasks
                    </h2>
                    <p>
                        {archiveTasks.length}
                    </p>
                </div>
                <div>
                    <h2>
                        Deleted tasks
                    </h2>
                    <p>
                        {deletedTasks.quantity}
                    </p>
                </div>
            </div>
        </>
    )
}

TaskStats.propTypes = {
    tasks: PropTypes.array
};

TaskStats.defaultProps = {
    tasks: []
};

export default TaskStats;