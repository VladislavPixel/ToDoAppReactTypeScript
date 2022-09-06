import React, { useState } from "react"

interface ToDoFormProps{
	classesParent: string;
}

const ToDoForm: React.FC<ToDoFormProps> = ({ classesParent }) => {
	const [value, setValue] = useState<string>("")
	const handlerChange = (event: React.ChangeEvent<HTMLInputElement>) => setValue(prevState => event.target.value)
	const handlerPress = (event: React.KeyboardEvent) => {
		if (event.charCode === 13) {
			console.log("Это enter!", value)
		}
	}
	return (
		<div className={`${classesParent}__todo todo-block`}>
			<label className="todo-block__label" htmlFor="title">Введите название задачи_</label>
			<input onKeyPress={handlerPress} onChange={handlerChange} value={value} placeholder="Ожидаю от Вас задачу" className="todo-block__text-field" type="text" id="title" />
		</div>
	)
}

export default ToDoForm
