import { useState } from "react";

const TaskForm = ({ createTaskProp, deletedAllTasks }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    e.target.reset();

    const newTask = {
      id: 3,
      title,
    };
    createTaskProp(title, description);
    setTitle("");
    setDescription("");
  };

  return (
    <div className="max-w-md mx-auto mb-16 border-2 rounded-md">
      <form
        id="form"
        className="bg-slate-100 p-10 mb-4"
        onSubmit={handleSubmit}
      >
        <h2 className="text-gray-500 text-xl font-bold capitalize mb-3">
          Crea tu tarea
        </h2>
        <em className="text-xs">
          {" "}
          <mark>Presione ENTER para guardar</mark>
        </em>
        <input
          className="bg-slate-100 p-3 w-full mb-2"
          required
          placeholder="Escribe tu tarea"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          autoFocus
        />
        <textarea
          className="bg-slate-100 p-3 w-full mb-2"
          placeholder="Escribe la descripcion de la tarea"
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <button className="bg-green-500 px-2 py-2 text-white rounded-md hover:bg-green-300">
          Guardar
        </button>
      </form>
      <button
        onClick={deletedAllTasks}
        className="bg-red-700 w-full px-2 py-2 text-white rounded-md: hover:bg-red-900"
      >
        Eliminar todas las tareas
      </button>
    </div>
  );
};

export default TaskForm;
