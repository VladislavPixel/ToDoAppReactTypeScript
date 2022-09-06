import React from "react"
// Components
import Header from "./components/common/header"
import ToDoForm from "./components/ui/toDoForm"

const App: React.FC = () => {
	return (
		<React.Fragment>
			<Header />
			<div className="wrapper__container container">
				<ToDoForm classesParent="container" />
			</div>
		</React.Fragment>
	)
}

export default App;
