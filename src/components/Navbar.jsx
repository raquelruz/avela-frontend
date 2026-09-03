import { FaHome, FaTasks } from "react-icons/fa";
import { IoStatsChart } from "react-icons/io5";
import { NavLink } from "react-router-dom";

const LINKS = [
	{ path: "/", label: "Home", icon: <FaHome /> },
	{ path: "/tasks", label: "Tareas", icon: <FaTasks /> },
	{ path: "/stats", label: "Estadísticas", icon: <IoStatsChart /> },
];

export const Navbar = () => {
	return (
		<div>
			<div className="flex justify-around items-center">
				<div>Avela</div>
				<div className="flex items-center gap-6">
					{LINKS.map((link) => (
						<NavLink key={link.path} to={link.path}>
							<div className="flex items-center gap-2">
								<span>{link.icon}</span>
								<span>{link.label}</span>
							</div>
						</NavLink>
					))}
				</div>
				<div>Pomodoro</div>
			</div>
		</div>
	);
};
