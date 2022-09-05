import React, { createContext, useState } from 'react';
import { useContext } from 'react';
import { TasksContext } from './TasksProvider';

export const FilterContext = createContext([]);

export const FilterProvider = ({ children }) => {
  const { tasks } = useContext(TasksContext);
  const [filteredTasks, setFilteredTasks] = useState([]);
  const filterTasks = (rule) => {
    if (rule === 'done') {
      setFilteredTasks(tasks.filter(t => t.done === true))
    } else if (rule === 'unDone') {
      setFilteredTasks(tasks.filter(t => t.done === false))
    } else {
      setFilteredTasks(tasks)
    }
  }

  const filterData = { filterTasks, filteredTasks, setFilteredTasks }

  return (
    <FilterContext.Provider value={ filterData }>
      { children }
    </FilterContext.Provider>
  )
}