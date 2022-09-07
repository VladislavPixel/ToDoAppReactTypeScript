import React, { useState, useEffect } from "react"
// Components
import Header from "./components/common/header"
import ToDoForm from "./components/ui/toDoForm"
import TasksList from "./components/ui/tasksList"
// TypeScript models
import type { DataTypes } from "./models"

declare var confirm: (message: string) => boolean

const App: React.FC = () => {
	// STATE
	const [tasks, setTasks] = useState<DataTypes.Task[]>([])
	useEffect(() => {
		const saved = JSON.parse(localStorage.getItem("tasks") || "[]") as DataTypes.Task[]
		setTasks(saved)
	}, []) // ПОФИКСИТЬ LOcalStorage не работает
	useEffect(() => {
		const dataString: string = JSON.stringify(tasks)
		localStorage.setItem("tasks", dataString)
	}, [tasks])
	// HENDLERS
	const handlerAddTask = (data: DataTypes.Task) => {
		setTasks(prevState => {
			return [...prevState, data]
		})
	}
	const handlerUpdateStatusTask = (data: DataTypes.Task) => {
		const newDataTasks = tasks.map(task => {
			if (task.id === data.id) return { ...data, status: (data.status === "done" ? "in process" : "done")}
			return task
		})
		setTasks(newDataTasks)
	}
	const handlerRemoveTask = (id: number) => {
		// у конфирм возникает проблема, так как TS не понимает глобальный метод его либо через window или добавить декларацию
		const result: boolean = confirm(`Вы точно хотите удалить таску под id --> ${id}?`)
		if (result) {
			const newDataTasks = tasks.filter(task => task.id !== id)
			setTasks(newDataTasks)
		}
	}
	return (
		<React.Fragment>
			<Header />
			<div className="wrapper__container container">
				<ToDoForm classesParent="container" onAddTask={handlerAddTask} />
				<TasksList classesParent="container" onRemoveTask={handlerRemoveTask} tasksData={tasks} onUpdateStatus={handlerUpdateStatusTask} />
			</div>
		</React.Fragment>
	)
}

export default App;
