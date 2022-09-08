import type React from "react"
// TypeScript
import type { DataTypes } from "../../models"

interface TasksListProps{
	classesParent: string;
	tasksData: DataTypes.Task[];
	onUpdateStatus: (data: DataTypes.Task) => void;
	onRemoveTask: (id: number) => void;
}

const TasksList: React.FC<TasksListProps> = ({ classesParent, tasksData, onUpdateStatus, onRemoveTask }) => {
	return (
		<div className={`${classesParent}__list-tasks tasks-list`}>
			{
				tasksData.length ?
				<ul className="tasks-list__block">
					{
						tasksData.map((task, index) => {
							const { id, status, title } = task
							return (
								<li className={status === "in process" ? "active" : "no-active"} key={id + index}>
									<input onChange={() => onUpdateStatus(task)} checked={status === "in process" ? false : true} className="tasks-list__check" type="checkbox" />
									{`${index + 1}. ${title}`}
									<button onClick={() => onRemoveTask(id)} className="tasks-list__remove-btn">Удалить задачу</button>
								</li>
							)
						})
					}
				</ul> :
				<p className="tasks-list__message">В трекере нет задач...</p>
			}
			
		</div>
	)
}

export default TasksList
