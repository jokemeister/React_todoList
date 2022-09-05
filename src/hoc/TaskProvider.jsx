import React, { createContext, useState } from 'react';

export const TaskContext = createContext(null);

export const TaskProvider = ({ children }) => {
  const [currentTask, setCurrentTask] = useState({});
  
  const taskData = { currentTask, setCurrentTask }

  return (
    <TaskContext.Provider value={ taskData }>
      { children } 
    </TaskContext.Provider>
  )
}