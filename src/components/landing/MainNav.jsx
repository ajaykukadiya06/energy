import { NavLink } from "react-router-dom";
import { navigationRoutes } from "../../routes";

export function MainNav({ className, onNavigate }) {
  return (
    <nav className={className ? `main-nav ${className}` : "main-nav"} aria-label="Main navigation">
      {navigationRoutes.map((item) => (
        <NavLink
          key={item.href}
          to={item.href}
          end={item.href === "/"}
          onClick={onNavigate}
          className={({ isActive }) => (isActive ? "active" : undefined)}
        >
          {item.label}
        </NavLink>
      ))}
    </nav>
  );
}
