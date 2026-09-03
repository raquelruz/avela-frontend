import { useState } from "react";

export const TaskForm = ({ addTask }) => {
	const [title, setTitle] = useState("");
	const [subject, setSubject] = useState("");
	const [priority, setPriority] = useState("medium");

	const handleSubmit = (event) => {
		event.preventDefault();

		const newTask = {
			id: Date.now(),
			title,
			subject,
			priority,
			completed: false,
		};

		addTask(newTask);

		setTitle("");
		setSubject("");
		setPriority("medium");
	};

	return (
		<form
			onSubmit={handleSubmit}
			className="bg-bg-card border border-border rounded-2xl p-5 shadow-sm mb-8 flex flex-col sm:flex-row gap-3"
		>
			<input
				type="text"
				value={title}
				onChange={(event) => setTitle(event.target.value)}
				placeholder="Título de la tarea"
				required
				className="flex-1 px-3 py-2 rounded-lg border border-border bg-bg-primary text-text-primary placeholder:text-text-muted"
			/>

			<input
				type="text"
				value={subject}
				onChange={(event) => setSubject(event.target.value)}
				placeholder="Materia"
				required
				className="flex-1 px-3 py-2 rounded-lg border border-border bg-bg-primary text-text-primary placeholder:text-text-muted"
			/>

			<select
				value={priority}
				onChange={(event) => setPriority(event.target.value)}
				className="px-3 py-2 rounded-lg border border-border bg-bg-primary text-text-primary"
			>
				<option value="low">Baja</option>
				<option value="medium">Media</option>
				<option value="high">Alta</option>
			</select>

			<button
				type="submit"
				className="px-4 py-2 rounded-lg bg-secondary-500 text-white font-medium hover:bg-secondary-600 transition-colors"
			>
				Crear tarea
			</button>
		</form>
	);
};
