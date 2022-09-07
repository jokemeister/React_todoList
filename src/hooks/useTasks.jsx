import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadTasks, setFilteredTasks, createNewTask, updateOneTask, deleteOneTask } from '../store/tasksReducer';

export const useTasks = (endPoint) => {
  const tasks = useSelector(state => state.tasks.tasks);
  const filterRule = useSelector(state => state.tasks.filterRule);
  const newTask = useSelector(state => state.tasks.newTask);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadTasks(endPoint))
  }, [endPoint, newTask])

  useEffect(() => {
    filterTasks(filterRule)
  }, [tasks, filterRule])

  function filterTasks(rule) {
    if (rule === 'done') {
      dispatch(setFilteredTasks(tasks.filter(t => t.done === true)))
    } else if (rule === 'unDone') {
      dispatch(setFilteredTasks(tasks.filter(t => t.done === false)))
    } else {
      dispatch(setFilteredTasks(tasks))
    }
  }

  function createTask(newTask) {
    dispatch(createNewTask(newTask));
  }

  function updateTask(taskId, newValues) {
    dispatch(updateOneTask(taskId, newValues));
  }

  function deleteTask(taskId) {
    dispatch(deleteOneTask(taskId));
  }

  return {
    createTask,
    updateTask,
    deleteTask
  }
}