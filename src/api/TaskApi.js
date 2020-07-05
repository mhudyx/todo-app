import axios from 'axios';
import store from '../store';

import { getTasksSuccess, deleteTaskSuccess, getArchiveTasksSuccess, getDeletedTasksSuccess } from '../actions';

export function getTasks() {
    return axios.get('http://localhost:3001/tasks?completed=false&_sort=priorityId&_order=desc')
                .then(response => {
                    store.dispatch(getTasksSuccess(response.data));
                    return response;
                });
};

export function getArchiveTasks() {
    return axios.get('http://localhost:3001/tasks?completed=true&_sort=endDate&_order=desc')
                .then(response => {
                    store.dispatch(getArchiveTasksSuccess(response.data));
                    return response;
                });
};

export function getDeletedTasks() {
    return axios.get('http://localhost:3001/deletedTasks')
                .then(response => {
                    store.dispatch(getDeletedTasksSuccess(response.data));
                    return response;
                })
}

export function deleteTask(todoId) {
    return axios.delete('http://localhost:3001/tasks/' + todoId)
                .then(response => {
                    store.dispatch(deleteTaskSuccess(todoId));
                    return response;
                });
};

export function registerTask(title, description, priority, priorityId, endDate, completed) {
    return axios.post('http://localhost:3001/tasks', { title, description, priority, priorityId, endDate, completed })
                .then(response => {
                    getTasks();
                    return response;
                });
};

export function confirmTask(todoId, completed, endDate) {
    return axios.patch('http://localhost:3001/tasks/' + todoId, { completed, endDate })
                .then(response => {
                    getTasks();
                    return response;
                });
};

export function deletedTasksQuantity(quantity) {
    return axios.patch('http://localhost:3001/deletedTasks', { quantity })
                .then(response => {
                    getDeletedTasks();
                    return response;
                });
};