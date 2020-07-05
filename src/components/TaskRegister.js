import React, { Component } from 'react';
import * as TaskApi from '../api/TaskApi';

class TaskRegister extends Component {

    constructor(props) {
        super(props);

        this.state = {
            title: '',
            description: '',
            priority: '',
            priorityId: 0,
            inputTitle: '',
            inputDescription: '',
            endDate: '',
            completed: false

        }

        this.onChangeValue = this.onChangeValue.bind(this);
        this.onRegister = this.onRegister.bind(this);
    }

    onChangeValue(e) {
        let input = e.target.name;
        let value = e.target.value;
        if(input === 'title') this.setState({ title: value, inputTitle: value });
        if(input === 'description') this.setState({ description: value, inputDescription: value });
        if(input === 'priority') {
            switch (value) {
                case "low":
                    return this.setState({ priority: value, priorityId: 1 });

                case "normal":
                    return this.setState({ priority: value, priorityId: 2 });

                case "high":
                    return this.setState({ priority: value, priorityId: 3 });

                default:
                    return console.log("Ops.")
            }
        }
    }

    onRegister(e) {
        e.preventDefault();
        TaskApi.registerTask(this.state.title, this.state.description, this.state.priority, this.state.priorityId, this.state.endDate, this.state.completed, );
        this.setState({ inputTitle: '', inputDescription: '', inputPriority: "" });
    }

    render() {
        return (
            <>
                <h2>Add a new task</h2>
                    <form className="registerTask__form" onSubmit={this.onRegister}>
                        <div className="registerTask__title form--input">
                            <p>Title</p> <input type="text" name="title" value={this.state.inputTitle} onChange={this.onChangeValue} />
                        </div>
                        <div className="registerTask__description form--input">
                            <p>Description</p> <input type="text" name="description" value={this.state.inputDescription} onChange={this.onChangeValue} />
                        </div>
                        <div className="registerTask__priority form--input">
                            <p>Priority</p>
                            <div>
                                <div>
                                    <input type="radio" name="priority" id="low" onChange={this.onChangeValue} value="low" />
                                        <label htmlFor="low">Low</label>
                                </div>
                                <div>
                                    <input type="radio" name="priority" id="normal" onChange={this.onChangeValue} value="normal"/>
                                        <label htmlFor="normal">Normal</label>
                                </div>
                                <div>
                                    <input type="radio" name="priority" id="high" onChange={this.onChangeValue} value="high" />
                                        <label htmlFor="high">High</label>
                                </div> 
                            </div> 
                           
                        </div>
                        <button type="submit" className="registerTask--button">Add Task</button>
                    </form>
             </>
        )
    }
}

export default TaskRegister;