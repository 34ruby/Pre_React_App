import React from 'react'

const tasks = [
    {
        "id" : 1,
        "text" : "Doctors Appointment",
        "day" : "Feb 5th at 2:30pm",
        "remind" : true,
    },
    {
        "id" : 2,
        "text" : "Meeting at school",
        "day" : "Feb 6th at 1:30pm",
        "remind" : true,
    },
    {
        "id" : 3,
        "text" : "Take a test",
        "day" : "Feb 7th at 2:30pm",
        "remind" : false,
    }
];

const Tasks = () => {
    return (
        <div>
            <ul>
            { tasks.map((task)=>{
                return (
                    <li>{task.text}</li>
                )
            })}
            </ul>
        </div>
    )
}

export default Tasks 