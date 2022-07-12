import React from 'react'
import Task from './Task.js'


const Tasks = ({tasks, onDelete}) => {
    return (
        <div>
            <ul>
            { tasks.map((task)=>{
                return (
                    // <li>{task.text}</li>
                    <Task key={task.id} task={task} onDelete={onDelete} ></Task>
                )
            })}
            </ul>
        </div>
    )
}

export default Tasks 