import { TaskList } from "../components/Tasks/TaskList";

export const Home = () => {
	const tasks = [
		{
			title: "Aprender JavaScript",
			subject: "JavaScript",
			priority: "high",
		},
		{
			title: "Estudiar inglés",
			subject: "Idiomas",
			priority: "medium",
		},
	];

	return (
		<div className="max-w-6xl mx-auto px-6 py-10">
			<div className="mb-8">
				<h1 className="font-title text-text-primary">¡Bienvenido de nuevo!</h1>
				<p className="text-text-tertiary mt-1">Tus tareas de hoy</p>
			</div>

			<TaskList tasks={tasks} />
		</div>
	);
};