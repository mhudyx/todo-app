import React from 'react';
import PropTypes from 'prop-types';

const TasksList = ({ tasks, deleteTask, deletedTasks, deleteTaskQuantity, confirmTask }) => {

    const todaysDate = new Date();

    const convertDate = (date) => {
        const yyyy = date.getFullYear().toString();
        const mm = (date.getMonth()+1).toString();
        const dd = date.getDate().toString();

        const mmChars = mm.split('');
        const ddChars = dd.split('');

        return yyyy + '-' + (mmChars[1]?mm:"0"+mmChars[0]) + '-' + (ddChars[1]?dd:"0"+ddChars[0]);
    }

    const endDate = convertDate(todaysDate);

    const onDeleteTask = (id) => {
        deleteTask(id);
        deleteTaskQuantity(deletedTasks.quantity + 1)
    }

    return (
            <>
            {tasks.map(task => {
                return (
                    <div className="tasks__task">
                                    <h3>
                                        {task.title}
                                    </h3>
                                    <ul className="tasks__details" key={task.id}>
                                        <li className="tasks__description">
                                            {task.description}
                                        </li>
                                        <li className={`tasks__priority color--${task.priority}`}>
                                            {task.priority}
                                        </li>
                                        <li className="tasks__button">
                                            <button className="done" onClick={() => confirmTask(task.id, true, endDate)}>&#x2714;</button>
                                        </li>
                                        <li className="tasks__button">
                                            <button className="delete" onClick={() => onDeleteTask(task.id)}>&#10006;</button>
                                        </li>
                                    </ul>
                    </div>
                )
            })}
            </>
    )
}

TasksList.propTypes = {
    tasks: PropTypes.array,
    deleteTask: PropTypes.func,
    confirmTask: PropTypes.func
};

TasksList.defaultProps = {
    tasks: [],
    deleteTask: () => console.warn("deleteTask is not defined yet!"),
    confirmTask: () => console.warn("confirmTask is not defined yet!"),
};

export default TasksList;