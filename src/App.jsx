import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList'
import { useState, useEffect } from 'react';
import {tasks as TasksData} from './data/tasks'

const App = () => {

  const [tasks, setTasks] = useState([]);

  useEffect(function (){
      setTasks(TasksData)
      if(localStorage.key(0) === "Tasks"){
        if(JSON.parse(localStorage.getItem("Tasks")).length === 0){
          localStorage.setItem('Tasks', JSON.stringify(TasksData))
        }
      }else{
        localStorage.setItem('Tasks', JSON.stringify(TasksData))
        console.log("key reada")
      }
  }, [])

  const createTask = (taskTitle, taskDescription) => {

    setTasks([...tasks, {
      id: tasks.length,
      title: taskTitle,
      description: taskDescription
    }])

    localStorage.setItem('Tasks', JSON.stringify([...tasks, {
      id: tasks.length,
      title: taskTitle,
      description: taskDescription
    }]))

  }


  function deletedTask(taskId) {
    console.log("Id",taskId)
    const newTasks = tasks.filter(({id}) => id !== taskId)
    setTasks(newTasks)

    // Se actualiza el local storage cuando se eleimina una tarea
    localStorage.setItem('Tasks', JSON.stringify(newTasks))
    console.log(newTasks)
  }


  const deletedAllTasks = () => {
    setTasks([])

    // Eliminar todas las tareas del localstorage tambien
    localStorage.setItem('Tasks', JSON.stringify([]))
  }

  return (
    <div>

      <main className='bg-slate-50 h-screen'> 
      <div className='container mx-auto p-10'>
      <TaskForm  createTaskProp={createTask} deletedAllTasks={deletedAllTasks}/>
      <TaskList deletedTask={deletedTask} tasks={tasks}/>
      {/*comment*/}
      </div>
      </main>
    </div>
  )
}

export default App;