import React, { useContext, useEffect, useState } from 'react';
import { FilterContext } from '../hoc/FilterProvider';
import { RequestsContext } from '../hoc/RequestsProvider';

export const useTasks = (endPoint) => {
  const { getTasksReq, createTaskReq, updateTaskReq, deleteTaskReq } = useContext(RequestsContext);
  const [ tasks, setTasks ] = useState([]);
  const [ filteredTasks, setFilteredTasks ] = useState([]);
  const { filterRule } = useContext(FilterContext);

  useEffect(() => {
    getTasksReq(endPoint)
      .then(setTasks)
  }, [])

  useEffect(() => {
    filterTasks(filterRule)
  }, [tasks, filterRule])

  function filterTasks(rule) {
    if (rule === 'done') {
      setFilteredTasks(tasks.filter(t => t.done === true))
    } else if (rule === 'unDone') {
      setFilteredTasks(tasks.filter(t => t.done === false))
    } else {
      setFilteredTasks(tasks)
    }
  }

  function createTask(newTask) {
    createTaskReq(newTask)
      .then(getTasksReq(endPoint))
      .then(res => setTasks([...tasks, res]))
  }

  function updateTask(taskId, newValues) {
    return updateTaskReq(taskId, newValues)
      .then(res => setTasks(tasks.map(t => t.id === res.id ? {...t, ...newValues} : t)))
  }

  function deleteTask(taskId) {
    return deleteTaskReq(taskId)
      .then(res => setTasks(tasks.filter(t => t.id !== res[0].id)))
  }

  return {
    filteredTasks,
    createTask,
    updateTask,
    deleteTask
  }
}