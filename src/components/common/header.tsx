import type React from "react"
// Components
import NavBar from "../ui/navBar"

const Header: React.FC = () => {
	return (
		<header className="wrapper__header header">
			<div className="header__container">
				<h1 className="header__title">React JS + TypeScript</h1>
				<NavBar classesParent="header" />
			</div>
		</header>
	)
}

export default Header
