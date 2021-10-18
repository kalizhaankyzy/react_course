import Header from "./components/Header";
import {BrowserRouter as Router, Route} from "react-router-dom"
import Tasks from "./components/Tasks";
import { useState, useEffect } from "react"
import {FaHandPeace} from 'react-icons/fa'
import AddTask from "./components/AddTask";
import getDataFromAPI, { getDataById, postDataToAPI, putDataToAPI } from "./components/api";
import Footer from "./components/Footer";
import About from "./components/About";

function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([])

  useEffect(()=>{
    const getTasks = async() =>{
      const tasksFromServer = await getDataFromAPI()
      setTasks(tasksFromServer)
    }
    getTasks()
  },[])
  
  const addTask = async(task) =>{
    const newTask = await postDataToAPI(task)
    setTasks([...tasks, newTask])
  }

  const deleteTask = async(id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'DELETE'
    })
    res.status === 200 
      ? setTasks(tasks.filter((task) => task.id !== id))
      : alert('ERROR!')
  }

  const toogleTask = async(id) => {
    const taskToToggle = await getDataById(id)
    const updTask = {...taskToToggle, isDone:!taskToToggle.isDone}
    console.log(updTask);
    const data = await putDataToAPI(id, updTask)
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, isDone: data.isDone } : task
      )
    )
    
  }
  return (
    <Router>
      <div className="app">
        <Header 
          title="To Do List" 
          onAdd={()=>setShowAddTask(!showAddTask)}
          showAdd={showAddTask}/>

        <Route path='/' exact render={(props) => (
          <>
            {showAddTask && <AddTask onAdd={addTask}/>}
            {tasks.length>0 
              ?<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toogleTask}></Tasks>
              : <p className="no_tasks">No tasks to show <FaHandPeace></FaHandPeace></p>}
          </>
        )}/>
        
        <Route path='/about' component={About}/>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
