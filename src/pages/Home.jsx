import { useState } from "react";
import { TaskList } from "../components/Tasks/TaskList";
import { TASKS } from "../utils/tasks.js"

export const Home = () => {
    const [ tasks, setTasks ] = useState(TASKS)

const toggleTask = (id) => {
    setTasks((prev) =>
        prev.map((task) =>
            task.id === id ? { ...task, completed: !task.completed } : task
        )
    );
};

	return (
		<div className="max-w-6xl mx-auto px-6 py-10">
			<div className="mb-8">
				<h1 className="font-title text-text-primary">¡Bienvenido de nuevo!</h1>
				<p className="text-text-tertiary mt-1">Tus tareas de hoy</p>
			</div>

			<TaskList tasks={tasks} toggleTask={toggleTask}/>
		</div>
	);
};