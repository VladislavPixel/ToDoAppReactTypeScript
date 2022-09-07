import React, { useRef } from "react"
// TypeScript models
import type { DataTypes } from "../../models"

interface ToDoFormProps{
	classesParent: string;
	onAddTask: (task: DataTypes.Task) => void;
}

const ToDoForm: React.FC<ToDoFormProps> = ({ classesParent, onAddTask }) => {
	// AUXILIARY
	const ref = useRef<HTMLInputElement>(null)
	// HANDLERS
	const handlerPress = (event: React.KeyboardEvent) => {
		if (event.charCode === 13) {
			onAddTask({
				id: Date.now(),
				title: ref.current!.value,
				status: "in process"
			})
			ref.current!.value = ""
		}
	}
	return (
		<div className={`${classesParent}__todo todo-block`}>
			<label className="todo-block__label" htmlFor="title">Введите название задачи_</label>
			<input ref={ref} onKeyPress={handlerPress} placeholder="Ожидаю от Вас задачу" className="todo-block__text-field" type="text" id="title" />
		</div>
	)
}

export default ToDoForm
