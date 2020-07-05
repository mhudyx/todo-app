import React from 'react';
import PropTypes from 'prop-types';

const ArchiveTasksList = ({ archiveTasks }) => {
    return (
            <>
            {archiveTasks.map(task => {
                return (
                    <div className="tasks__task">
                                    <h3>
                                        {task.title}
                                    </h3>
                                    <ul className="tasks__details" key={task.id}>
                                        <li className="tasks__description">
                                            {task.description}
                                        </li>
                                        <li className="tasks__date">
                                            Finished: {task.endDate}
                                        </li>
                                    </ul>
                    </div>
                )
            })}
            </>
    )
}

ArchiveTasksList.propTypes = {
    archiveTasks: PropTypes.array
};

ArchiveTasksList.defaultProps = {
    archiveTasks: []
};

export default ArchiveTasksList;