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
  }, [endPoint])

  useEffect(() => {
    filterTasks(filterRule)
  }, [tasks, filterRule])

  function getTasks(endPoint) {
    getTasksReq(endPoint)
      .then(setTasks)
  }

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
      .then(() => getTasks(endPoint))
  }

  function updateTask(taskId, newValues) {
    return updateTaskReq(taskId, newValues)
      .then(() => getTasks(endPoint))
  }

  function deleteTask(taskId) {
    console.log('delete');
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