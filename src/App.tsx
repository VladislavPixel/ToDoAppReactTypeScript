import React from "react"
// Components
import Header from "./components/common/header"
import { Routes, Route } from "react-router-dom"
import TasksPage from "./pages/tasksPage"
import AboutPage from "./pages/aboutPage"

const App: React.FC = () => {
	return (
		<React.Fragment>
			<Header />
			<div className="wrapper__container container">
				<Routes>
					<Route path="/" element={<TasksPage />} />
					<Route path="/about" element={<AboutPage />} />
				</Routes>
			</div>
		</React.Fragment>
	)
}

export default App;
