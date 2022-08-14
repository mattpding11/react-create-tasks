import { TaskCard } from "./TaskCard";


const TaskList = ({tasks, deletedTask}) => {


    if(tasks.length === 0){
     return <h1 className="text-black text-2xl text-center grid-cols-2 font-medium">No hay tareas aun</h1>
    }

    
    if(localStorage.key(0) === "Tasks" && JSON.parse(localStorage.getItem('Tasks').length) !== 0){
        tasks = JSON.parse(localStorage.getItem("Tasks"))
    }

    return (
        <div className="grid gap-2 md:grid-cols-3 sm:grid-cols-1 lg:grid-cols-4">
        {tasks.map((task) =>
         <TaskCard deletedTask={deletedTask} key={task.id} task={task}/>)}
        </div>
      
    );
}

export default TaskList;
