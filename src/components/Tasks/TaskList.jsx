import { TaskCard } from "./TaskCard";

export const TaskList = ({ tasks, toggleTask }) => {
	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
			{tasks.map((task) => (
				<TaskCard task={task} key={task.id} toggleTask={toggleTask} />
			))}
		</div>
	);
};