import styles from './TaskCard.module.css';
import trash from '../assets/trash.svg';
import unchecked from '../assets/unchecked.svg';
interface TaskCardProps {
    task: string;
}

export function TaskCard({task}:TaskCardProps) {

    return (
        <div className={styles.task}>
           <div className={styles.flexcontainer}>
            <label>
                <input type='checkbox' className={styles.checkbox} />
            </label> 
                <img src={unchecked} />
             {task}
            </div>
                <img src={trash} className="trash" />
        </div>
    )
}
