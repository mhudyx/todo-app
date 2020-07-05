import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './Content.scss';

import { HomePage, TasksListPage, TasksArchivePage, AddTaskPage } from '../../pages';

const Content = () => {
    return (
        <div className="main">
            <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/tasks" component={TasksListPage} />
                <Route path="/archive" component={TasksArchivePage} />
                <Route path="/addtask" component={AddTaskPage} />
            </Switch>
        </div>
    )
}

export default Content;