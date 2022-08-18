import {ChangeEvent, FormEvent, useState} from 'react';
import styles from './AddTaskBar.module.css';
import plus from '../assets/plus.svg';

interface AddTaskBarProps {
    addTask: (newTask:string) => void;
}

export function AddTaskBar({addTask}:AddTaskBarProps) {

    const [newTask, setNewTask] = useState('')

    function handleCreateNewTask(event: FormEvent) {
        event.preventDefault()
        console.log(newTask)
        addTask(newTask)

        setNewTask('')    
    }
    
    function handleChangeInput(event: ChangeEvent<HTMLInputElement>){
        setNewTask(event.target.value)
    }
    return (
        <form 
            className={styles.tasksForm}
            onSubmit={handleCreateNewTask}
        >
            <input 
                type='text'
                name="task"
                placeholder="Adicione uma nova tarefa"
                className={styles.taskBar}
                value={newTask}
                onChange={handleChangeInput}
            />
            <span>
                <button 
                className={styles.button} 
                type="submit" >

                Criar 

                <img 
                src={plus} alt="plus" 
                className={styles.image} />

                </button>

            </span>
        </form>
    )
}