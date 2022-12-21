import logo from "../logo.png";

export function TaskCard(task) {
  return (
    <div className="bg-gray-800 text-white p-[20px] rounded-md break-words">
      <h3 className="text-xl font-bold capitalize">
        <i>
          {" "}
          <img src={logo} alt="logo" className="w-5" />
        </i>
        {task.task.title}
      </h3>
      <p className="text-gray-400 text-sm">{task.task.description}</p>
      <button
        className="bg-red-500 px-2 py-2 rounded-md mt-4 hover:bg-red-400"
        onClick={() => task.deletedTask(task.task.id)}
      >
        Eliminar tarea
      </button>
    </div>
  );
}
