import React, { useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RequestsContext } from '../hoc/RequestsProvider';

export const useTasks = (endPoint) => {
  const { getTasksReq, createTaskReq, updateTaskReq, deleteTaskReq } = useContext(RequestsContext);
  const tasks = useSelector(state => state.tasks.tasks);
  const filteredTasks = useSelector(state => state.tasks.filteredTasks);
  const filterRule = useSelector(state => state.tasks.filterRule);
  const dispatch = useDispatch();

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
 
  function setTasks(array) {
    dispatch({type: "SET_TASKS", payload: array})
  }

  function setFilteredTasks(array) {
    dispatch({type: "SET_FILTERED_TASKS", payload: array})
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