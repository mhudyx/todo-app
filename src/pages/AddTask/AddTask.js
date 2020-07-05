import React from 'react';
import './AddTask.scss';

import { TaskRegister } from '../../components';

const AddTaskPage = () => {
    return (
        <div className="registerTask">
           <TaskRegister /> 
        </div>
    )
}

export default AddTaskPage;