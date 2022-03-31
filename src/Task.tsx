import React, {ChangeEvent} from 'react';
import {TaskType} from "./TodoList";

type TaskPropsType = TaskType & {
    removeTask:(taskID:string)=>void;
    changeTaskStatus : (taskID: string, isDone:boolean)=>void
}

const taskClasses = 'task ${props.isDone ? "task-completed": ""}'
const Task = (props:TaskPropsType) => {
    const changeTaskStatus = (e:ChangeEvent<HTMLInputElement>) =>
        props.changeTaskStatus(props.id,e.currentTarget.checked)
    return (
        <li >
            <input type="checkbox"
                   onChange={changeTaskStatus}
                   checked={props.isDone}/>
            <span className={taskClasses}>{props.title}</span>
            <button onClick={() =>{props.removeTask(props.id)}}>X</button>
        </li>
    );
};

export default Task;