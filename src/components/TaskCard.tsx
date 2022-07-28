import styles from './TaskCard.module.css';
import trash from '../assets/trash.svg';



// interface Tasks {
//     id: number;
//     title: string;
//     isComplete: boolean;
// }



export function TaskCard(){

    return (<div className={styles.task}><input type='checkbox'/> Estudar <img src= {trash} /> </div>)


}
