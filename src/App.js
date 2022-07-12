import Header from './components/Header.js'
import Tasks from './components/Tasks.js'
import { useState } from 'react';

function App() {

  // const [count, setCount] = useState(0)

  const [tasks, setTasks] = useState([    
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
  ])

  // JSX code
  // let count = 1;
  // const increaseCount = () => {
  //   // setCount(count+1)
  //   setCount((prevValue) => {
  //     return prevValue + 1
  //   })
  //   console.log(count);
  // }
const onDelete = (taskId) => {
  // setTasks = tasks.filter((task)=> task.id !== taskId)
  setTasks((prevTasks)=>prevTasks.filter((task)=> task.id !== taskId))
  console.log(tasks)
  // tasks.filter((task) => {
  //   return task.id !== taskId
  // })
}

  return (
    <div className="App">
      <h1>React Todo</h1>
      {/* <Header title="props test code"/> */}
      {/* <Header title="button title"></Header> */}
      <Header title="Tasks Tracker" />
      <Tasks tasks = {tasks} onDelete={onDelete} />
      
      {/* <h1>Counter : {count}</h1>
      <button onClick={increaseCount}>+</button> */}
    </div>
  );
}

export default App;
