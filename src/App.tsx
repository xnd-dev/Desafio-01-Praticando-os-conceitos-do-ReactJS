import styles from './App.module.css';
import './global.css';
import { useState } from 'react';

import { Header } from './components/Header';
import { AddTaskBar } from './components/AddTaskBar';
import { TaskCard } from './components/TaskCard';
import { TaskContainer } from './components/TaskContainer';




export function App () {
  const [tasks, setTasks] = useState<string[]>([])

  function addTask(newTask:string) {
    setTasks([...tasks, newTask])

  }

  return (
    <>
      <Header/>
      <AddTaskBar addTask={addTask} />
      <TaskContainer taskList={tasks} />
    </>
  )
}


