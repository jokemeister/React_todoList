import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadTasks, setFilteredTasks, createNewTask, updateOneTask, deleteOneTask } from '../store/tasksReducer';

export const useTasks = (endPoint, listId) => {
  const todayTasks = useSelector(({ tasks }) => tasks.today);
  const tasksByList = useSelector(({ tasks }) => tasks.tasksByList);
  const filterRule = useSelector(({ tasks }) => tasks.filterRule);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('useTasks', endPoint, listId);
    dispatch(loadTasks(endPoint, listId))
  }, [endPoint])

  useEffect(() => {
    console.log('useTasks listId', listId);
    if (listId) {
      console.log('useTasks taskByList', tasksByList);
      filterTasks(filterRule, tasksByList[listId])
    } else {
      console.log('useTasks todayTasks', todayTasks);
      filterTasks(filterRule, todayTasks)
    }
  }, [todayTasks, tasksByList, filterRule])

  function filterTasks(rule, stateForFilter) {
    if (rule === 'done') {
      dispatch(setFilteredTasks(stateForFilter.filter(t => t.done === true)))
    } else if (rule === 'unDone') {
      dispatch(setFilteredTasks(stateForFilter.filter(t => t.done === false)))
    } else {
      dispatch(setFilteredTasks(stateForFilter))
    }
  }

  function createTask(newTask) {
    dispatch(createNewTask(newTask));
  }

  function updateTask(taskId, newValues, listId) {
    dispatch(updateOneTask(taskId, newValues, listId));
  }

  function deleteTask(taskId, listId) {
    dispatch(deleteOneTask(taskId, listId));
  }

  return {
    createTask,
    updateTask,
    deleteTask
  }
}