import React, { useState, useEffect } from "react"
// Components
import ToDoForm from "../components/ui/toDoForm"
import TasksList from "../components/ui/tasksList"
// TypeScript models
import type { DataTypes } from "../models"

declare var confirm: (message: string) => boolean

const TasksPage: React.FC = () => {
	// STATE
	const [tasks, setTasks] = useState<DataTypes.Task[]>([])
	// HENDLERS
	const handlerAddTask = (data: DataTypes.Task) => {
		setTasks(prevState => {
			updatedLocalStorage([...prevState, data])
			return [...prevState, data]
		})
	}
	const handlerUpdateStatusTask = (data: DataTypes.Task) => {
		const newDataTasks = tasks.map(task => {
			if (task.id === data.id) return { ...data, status: (data.status === "done" ? "in process" : "done")}
			return task
		})
		updatedLocalStorage(newDataTasks)
		setTasks(newDataTasks)
	}
	const handlerRemoveTask = (id: number) => {
		// у конфирм возникает проблема, так как TS не понимает глобальный метод его либо через window или добавить декларацию
		const result: boolean = confirm(`Вы точно хотите удалить таску под id --> ${id}?`)
		if (result) {
			const newDataTasks = tasks.filter(task => task.id !== id)
			updatedLocalStorage(newDataTasks)
			setTasks(newDataTasks)
		}
	}
	const updatedLocalStorage = (data: DataTypes.Task[]) => {
		const dataString: string = JSON.stringify(data)
		localStorage.setItem("tasks", dataString)
	}
	useEffect(() => {
		const saved = JSON.parse(localStorage.getItem("tasks") || "[]") as DataTypes.Task[]
		setTasks(saved)
	}, [])
	return (
		<React.Fragment>
			<ToDoForm classesParent="container" onAddTask={handlerAddTask} />
			<TasksList classesParent="container" onRemoveTask={handlerRemoveTask} tasksData={tasks} onUpdateStatus={handlerUpdateStatusTask} />
		</React.Fragment>
	)
}

export default TasksPage
