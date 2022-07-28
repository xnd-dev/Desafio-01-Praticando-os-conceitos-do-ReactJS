import styles from './AddTaskBar.module.css';
import plus from '../assets/plus.svg';

export function AddTaskBar()
{
    return (
        <form className={styles.tasksForm}>
            <input 
                type='text'
                name="task"
                placeholder="Adicione uma nova tarefa"
                className={styles.taskBar}
            />
            <span>
                <button className={styles.button} type="submit" > Criar <img src={plus} alt="plus" className={styles.image} />
                </button>

            </span>
        </form>
    )
}