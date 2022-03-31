import React, {useState} from 'react';
import './App.css';
import TodoList, {TaskType} from './TodoList';
import {v1} from "uuid";

export type FilterValueType = "all" | "active" | "completed"

function App() {
    console.log(v1())
    const resultArray = useState<Array<TaskType>>([
        {id: v1(), title: "HTML", isDone: true},
        {id: v1(), title: "CSS", isDone: true},
        {id: v1(), title: "JS/TS", isDone: true},
        {id: v1(), title: "JS/TS", isDone: true},
    ])

    const tasks = resultArray[0]
    const setTasks = resultArray[1]

    // @ts-ignore
    const [filter, setFilter] = useState<FilterValueType>('all')


    const removeTask = (taskID: string) => {
        const filteredTasks = tasks.filter(task => task.id !== taskID)
        setTasks(filteredTasks)
    }
    const addTask = (title:string) => {
       const newTask: TaskType = {
           id:v1(), title,isDone:false
       }
       const updatedTasks = [newTask,...tasks]
        setTasks(updatedTasks)
    }
    const changeTaskStatus = (taskID: string, isDone:boolean) => {
        setTasks(tasks.map(t=>t.id===taskID ? {...t,isDone:isDone}:t))
    }

    const changeFilter = (filter: FilterValueType) => {
        setFilter(filter)
    }

    const getFilteredTasksForRender = () => {
        switch (filter) {
            case "completed":
                return tasks.filter(t => t.isDone === true)
            case "active":
                return tasks.filter(t => t.isDone === false)
            default:
                return tasks
        }
    }

    const filteredTasksForRender = getFilteredTasksForRender()
    // if(!filteredTasksForRender.length){
    //     changeFilter("all")
    // }

    return (
        <div className="App">
            <TodoList
                title={"What to learn"}
                tasks={getFilteredTasksForRender()}
                removeTask={removeTask}
                changeFilter={changeFilter}
                addTask={addTask}
                filter={filter}
                changeTaskStatus={changeTaskStatus}
            />
            {/*<TodoList*/}
            {/*    title={"What to read"}*/}
            {/*    tasks={tasks_2}/>*/}
            {/*<TodoList*/}
            {/*    title={"What to buy"}*/}
            {/*    tasks={tasks_3}/>*/}
        </div>
    );
}

export default App;
