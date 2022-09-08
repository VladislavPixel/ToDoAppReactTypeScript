import type React from "react"
// Components
import { NavLink } from "react-router-dom"

interface NavBarProps{
	classesParent: string;
}

const NavBar: React.FC<NavBarProps> = ({ classesParent }) => {
	return (
		<nav className={`${classesParent}__navbar navbar-block`}>
			<ul className="navbar-block__list">
				<NavLink className="navbar-block__element" to="/">Список дел</NavLink>
				<NavLink className="navbar-block__element" to="/about">Информация</NavLink>
			</ul>
		</nav>
	)
}

export default NavBar
