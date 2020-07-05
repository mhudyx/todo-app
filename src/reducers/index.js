import * as types from '../actions/ActionTypes';
import _ from 'lodash';

const initialState = {
    tasks: [],
    archiveTasks: [],
    deletedTasks: [],
    taskType: []
};

const taskReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_TASKS_SUCCESS:
            return Object.assign({}, state, { tasks: action.tasks });
        case types.GET_ARCHIVETASKS_SUCCESS:
            return Object.assign({}, state, { archiveTasks: action.archiveTasks} )
        case types.GET_DELETEDTASKS_SUCCESS:
            return Object.assign({}, state, { deletedTasks: action.deletedTasks} )
        case types.DELETE_TASK_SUCCESS:
            const newTasks = _.filter(state.tasks, task => task.id !== action.taskId);
            return Object.assign({}, state, { tasks: newTasks});
        default:
            return state;
    }
}

export default taskReducer;