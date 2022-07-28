import styles from './App.module.css';
import './global.css';

import { Header } from './components/Header';
import { AddTaskBar } from './components/AddTaskBar';
import { TaskCard } from './components/TaskCard';

export function App () {
  return (
    <>
    <Header/>
    <AddTaskBar/>
    <TaskCard/>
    </>
  )
}


