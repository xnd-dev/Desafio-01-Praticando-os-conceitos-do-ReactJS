import styles from './Header.module.css';
import toDoLogo from '../assets/Todo-Logo.svg';

export function Header(){

    return (
        <div>
        <header className={styles.header}>
            < img src={toDoLogo} alt= "Logotipo do To Do" />
        </header>
        </div>
    )

}