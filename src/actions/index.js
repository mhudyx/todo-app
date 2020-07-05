import * as types from './ActionTypes';

export function getTasksSuccess(tasks) {
    return {
        type: types.GET_TASKS_SUCCESS,
        tasks
    };
};

export function getArchiveTasksSuccess(archiveTasks) {
    return {
        type: types.GET_ARCHIVETASKS_SUCCESS,
        archiveTasks
    }
}

export function getDeletedTasksSuccess(deletedTasks) {
    return {
        type: types.GET_DELETEDTASKS_SUCCESS,
        deletedTasks
    }
}

export function deleteTaskSuccess(taskId) {
    return {
        type: types.DELETE_TASK_SUCCESS,
        taskId
    };
};

