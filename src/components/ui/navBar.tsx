import type React from "react"

interface NavBarProps{
	classesParent: string;
}

const NavBar: React.FC<NavBarProps> = ({ classesParent }) => {
	return (
		<nav className={`${classesParent}__navbar navbar-block`}>
			<ul className="navbar-block__list">
				<li><a href="/">Список дел</a></li>
				<li><a href="/about">О нас</a></li>
			</ul>
		</nav>
	)
}

export default NavBar
