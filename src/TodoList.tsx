import React from 'react';
import TodoListHeader from "./TodoListHeader";
import Task from "./Task";
import TasksList from "./TasksList";
import {FilterValueType} from "./App";


type TodoListPropsType = {
    title: string;
    tasks: Array<TaskType>;
    removeTask: (taskID: string) => void;
    changeFilter: (filter: FilterValueType) => void
    addTask: (title: string)=>void
    filter: FilterValueType
    changeTaskStatus: (taskID: string, isDone:boolean) =>void
}

export type TaskType = {
    id: string;
    title: string;
    isDone: boolean;

}


const TodoList = (props: TodoListPropsType) => {

    return (
        <div>
            <TodoListHeader
                title={props.title}
                addTask={props.addTask}
            />
            {/*<div>*/}
            {/*    <input/>*/}
            {/*    <button>+</button>*/}
            {/*</div>*/}
            <TasksList tasks={props.tasks}
                       removeTask={props.removeTask}
                       filter={props.filter}
                       changeFilter={props.changeFilter}
                       changeTaskStatus={props.changeTaskStatus}/>
            <div>
                {/*<button onClick={() => props.changeFilter('all')}>All</button>*/}
                {/*<button onClick={() => props.changeFilter('active')}>Active</button>*/}
                {/*<button onClick={() => props.changeFilter('completed')}>Completed</button>*/}
            </div>
        </div>
    )
};


export default TodoList;