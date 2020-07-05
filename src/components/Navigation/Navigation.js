import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.scss'

const navList = [
    {name: "Home", path: "/", exact: true},
    {name: "Task List", path: "/tasks"},
    {name: "Task Archive", path: "/archive"},
    {name: "Add Task", path: "/addtask"}
]

const Navigation = () => {

    const menu = navList.map(item => (
        <li key={item.name}>
            <NavLink to={item.path} exact={item.exact ? item.exact : false}>{item.name}</NavLink>
        </li>
    ))

    return (
        <nav>
            <ul>
                {menu}
            </ul>
        </nav>
    )
}

export default Navigation;