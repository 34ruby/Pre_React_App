import React, {useState} from 'react'

const AddTask = ({onAdd}) => {

    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault();
        console.log('submit')
        onAdd({text, day, reminder})
    }

    return (
        <form className='add-form'>
            <div className="form-control">
                <label>Task</label>
                <input type = "text" value={text} onChange={(e)=>{setText(e.target.value)}} placeholder='Add Task'></input>
            </div>
            <div className = "form-control">
                <label>Day & Time</label>
                <input type = "text" placeholder='Add Data' value={day} onchange={(e)=>{setDay(e.target.value)}}></input>
            </div>
            <div className = "form-control">
                <label>Set Reminder</label>
                <input type="checkbox" value={reminder} onChange={(e)=>{setReminder(e.currentTarget.checked)}}></input>
            </div>

            <input type="submit" value="Save Task" className="btn btn-block"></input>
        </form>
    )
}

export default AddTask