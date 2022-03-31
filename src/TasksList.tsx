import React from 'react';
import Task from "./Task";
import {TaskType} from "./TodoList";
import {FilterValueType} from "./App";
import ControlButtons from "./ControlButtons";

type TasksListPropsType = {
    filter: FilterValueType
    tasks: Array<TaskType>
    removeTask: (id: string) => void
    changeFilter: (filter: FilterValueType) => void
    changeTaskStatus:(taskID: string, isDone:boolean)=>void
};


const TasksList = (props: TasksListPropsType) => {
    const tasksComponentsList = props.tasks.map(task => {
        return (
            <Task key={task.id}
                  {...task}
                  removeTask={props.removeTask}
                  changeTaskStatus ={props.changeTaskStatus}
            />
        )
    })
    return (
        <>
            {tasksComponentsList.length
                ?
                <ul>
                    {tasksComponentsList}
                </ul>
                : <span>Tasks list with this filter is empty.Please,add task</span>
            }
            <ControlButtons
                changeFilter={props.changeFilter}
                filter={props.filter}
            />
        </>
    );
};

export default TasksList;