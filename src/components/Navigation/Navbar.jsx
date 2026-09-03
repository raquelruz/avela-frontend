import { useState } from "react";
import { FaHome, FaTasks, FaTimes } from "react-icons/fa";
import { IoMenu, IoStatsChart } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";
import { MobileMenu } from "./MobileMenu";

const LINKS = [
	{ path: "/", label: "Home", icon: <FaHome /> },
	{ path: "/tasks", label: "Tareas", icon: <FaTasks /> },
	{ path: "/stats", label: "Estadísticas", icon: <IoStatsChart /> },
];

export const Navbar = () => {
	const [mobileMenuOpen, setMobileMenu] = useState(false);

	const toggleMenu = () => setMobileMenu((prev) => !prev);
	const closeMenu = () => setMobileMenu(false);

	return (
		<nav className="bg-cream-100 border-b border-cream-300 shadow-sm">
			<div className="flex justify-between items-center px-6 py-4 max-w-6xl mx-auto">
				<Link to="/" className="font-title text-2xl text-text-secondary tracking-tight">
					Avela
				</Link>

				<div className="hidden lg:flex items-center gap-8">
					{LINKS.map((link) => (
						<NavLink
							key={link.path}
							to={link.path}
							className={({ isActive }) =>
								`flex items-center gap-2 text-sm font-medium transition-colors ${
									isActive ? "text-secondary-500" : "text-text-tertiary hover:text-text-primary"
								}`
							}
						>
							<span className="text-base">{link.icon}</span>
							<span>{link.label}</span>
						</NavLink>
					))}
				</div>

				<div className="hidden lg:flex items-center gap-2 rounded-full bg-cream-200 px-4 py-2 text-sm text-text-primary">
					<span>☕</span>
					<span>Pomodoro</span>
				</div>

				<button
					onClick={toggleMenu}
					className="lg:hidden text-xl text-text-secondary"
					aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
				>
					{mobileMenuOpen ? <FaTimes /> : <IoMenu />}
				</button>
			</div>

			{mobileMenuOpen && <MobileMenu links={LINKS} closeMenu={closeMenu} />}
		</nav>
	);
};