import { NavLink } from "react-router-dom";

export const MobileMenu = ({ links, closeMenu }) => {
	return (
		<div className="lg:hidden border-t border-border bg-bg-card px-4 py-3">
			<div className="flex flex-col gap-1">
				{links.map((link) => (
					<NavLink
						key={link.path}
						to={link.path}
						onClick={closeMenu}
						className={({ isActive }) =>
							`flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium transition-colors ${
								isActive ? "bg-bg-tertiary text-secondary-500" : "text-text-tertiary hover:bg-bg-tertiary"
							}`
						}
					>
						<span className="text-base">{link.icon}</span>
						<span>{link.label}</span>
					</NavLink>
				))}
			</div>
		</div>
	);
};