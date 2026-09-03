const PRIORITY_STYLES = {
	high: "bg-secondary-100 text-secondary-700",
	medium: "bg-primary-100 text-primary-700",
	low: "bg-sage-100 text-sage-700",
};

const PRIORITY_LABELS = {
	high: "Alta",
	medium: "Media",
	low: "Baja",
};

export const TaskCard = ({ task, toggleTask }) => {
	return (
		<div className="bg-bg-card border border-border rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow">
			<div className="flex items-start justify-between gap-3 mb-2">
				<div className="flex items-start gap-3">
					<button
						onClick={() => toggleTask(task.id)}
						className={`mt-1 w-5 h-5 shrink-0 rounded-full border-2 flex items-center justify-center transition-colors ${
							task.completed
								? "bg-sage-500 border-sage-500 text-white"
								: "border-border hover:border-sage-400"
						}`}
						aria-label={task.completed ? "Marcar como pendiente" : "Marcar como completada"}
					>
						{task.completed && "✓"}
					</button>

					<h3
						className={`font-title text-lg ${
							task.completed ? "text-text-tertiary line-through" : "text-text-primary"
						}`}
					>
						{task.title}
					</h3>
				</div>

				<span
					className={`shrink-0 text-xs font-medium px-2.5 py-1 rounded-full ${PRIORITY_STYLES[task.priority]}`}
				>
					{PRIORITY_LABELS[task.priority]}
				</span>
			</div>
			<p className="text-sm text-text-tertiary pl-8">{task.subject}</p>
		</div>
	);
};