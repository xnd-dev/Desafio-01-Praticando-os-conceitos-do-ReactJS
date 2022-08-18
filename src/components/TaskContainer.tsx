import styles from './TaskContainer.module.css';
import { TaskCard } from "./TaskCard";

interface TaskContainerProps {
    taskList: string[];
}


export function TaskContainer ({taskList}:TaskContainerProps) {
    return (
        <div className={styles.container}>
            <span 
                className={styles.createdTasks}
            >
                Tarefas criadas
                <span 
                    className={styles.concludedTasks}
                >
                    Concluídas
                </span>
            </span>
            <div 
                className={styles.taskContainer}
            >
                {taskList.map(task => <TaskCard task={task} />)}
            </div>
        </div>
    )
}
