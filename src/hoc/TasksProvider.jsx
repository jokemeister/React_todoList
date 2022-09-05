import React, { createContext, useState } from 'react';

export const TasksContext = createContext([]);

export const TasksProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [oneTask, setOneTask] = useState({});

  const tasksData = { tasks, setTasks, oneTask, setOneTask }
  return (
    <TasksContext.Provider value={ tasksData }>
      { children } 
    </TasksContext.Provider>
  )
}