import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadTasks, setFilteredTasks, createNewTask, updateOneTask, deleteOneTask } from '../store/tasksReducer';

export const useTasks = (endPoint) => {
  const allTasks = useSelector(({ tasks }) => tasks.allTasks);
  const filterRule = useSelector(({ tasks }) => tasks.filterRule);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadTasks(endPoint))
  }, [endPoint])

  useEffect(() => {
    console.log('filter');
    filterTasks(filterRule)
  }, [allTasks, filterRule])

  function filterTasks(rule) {
    if (rule === 'done') {
      dispatch(setFilteredTasks(allTasks.filter(t => t.done === true)))
    } else if (rule === 'unDone') {
      dispatch(setFilteredTasks(allTasks.filter(t => t.done === false)))
    } else {
      dispatch(setFilteredTasks(allTasks))
    }
  }

  function createTask(newTask) {
    dispatch(createNewTask(newTask));
  }

  function updateTask(taskId, newValues, listId) {
    dispatch(updateOneTask(taskId, newValues, listId));
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