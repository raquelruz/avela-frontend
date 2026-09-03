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

export const TaskCard = ({ task }) => {
	return (
		<div className="bg-bg-card border border-border rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow">
			<div className="flex items-start justify-between gap-3 mb-2">
				<h3 className="font-title text-lg text-text-primary">{task.title}</h3>
				<span
					className={`shrink-0 text-xs font-medium px-2.5 py-1 rounded-full ${PRIORITY_STYLES[task.priority]}`}
				>
					{PRIORITY_LABELS[task.priority]}
				</span>
			</div>
			<p className="text-sm text-text-tertiary">{task.subject}</p>
		</div>
	);
};