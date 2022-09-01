import React, { createContext, useState } from 'react';

export const TasksContext = createContext([]);

export const TasksProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [url, setUrl] = useState('http://localhost:4000/tasks');

  const tasksData = { tasks, setTasks, url, setUrl }
  return (
    <TasksContext.Provider value={ tasksData }>
      { children } 
    </TasksContext.Provider>
  )
}