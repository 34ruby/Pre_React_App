import React from 'react'
import Task from './Task.js'


const Tasks = ({tasks, onDelete, onToggle}) => {
    return (
        <div>
            <ul>
            { tasks.map((task)=>{
                return (
                    // <li>{task.text}</li>
                    <Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle} ></Task>
                )
            })}
            </ul>
        </div>
    )
}

export default Tasks 