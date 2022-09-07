import { combineReducers } from 'redux'
import axios from 'axios';

// ACTIONS

  export const loadTasks = (endPoint) => dispatch => {
    console.log(endPoint);
    axios.get(endPoint)
      .then(res => res.data)
      .then(tasks => { 
        dispatch({
          type: "TASKS_LOADED",
          payload: tasks
        }); 
      })
      .catch(err => { throw new Error(err) })
  }

  export const setFilteredTasks = (payload) => ({type: "SET_FILTERED_TASKS", payload});

  export const createNewTask = (newTask) => dispatch => {
    console.log(newTask);
    return axios.post('http://localhost:4000/tasks', newTask)
      .then(res => res.data)
      .then(newTask => { 
        console.log(newTask);
        dispatch({
          type: "SET_CHANGES",
          payload: newTask
        }); 
      })
      .catch(err => { throw new Error(err) })
  }

  export const deleteOneTask = (taskId) => dispatch => {
    console.log(taskId);
    return axios.delete(`http://localhost:4000/tasks/${taskId}`)
      .then(res => res.data)
      .then(deletedTask => { 
        dispatch({
          type: "SET_CHANGES",
          payload: deletedTask
        }); 
      })
      .catch(err => { throw new Error(err) })
  }

  export const updateOneTask = (taskId, newValues) => dispatch => {
    console.log(taskId, newValues);
    return axios.patch(`http://localhost:4000/tasks/${taskId}`, newValues)
      .then(res => res.data)
      .then(updatedTask => { 
        dispatch({
          type: "SET_CHANGES",
          payload: updatedTask
        }); 
      })
      .catch(err => { throw new Error(err) })
  }

// /ACTIONS

// REDUCERS

  export const tasksReducer = combineReducers({
    tasks: (tasks = [], {type, payload}) => type === "TASKS_LOADED" ? payload : tasks,
    filteredTasks: (filteredTasks = [], {type, payload}) => type === "SET_FILTERED_TASKS" ? payload : filteredTasks,
    filterRule: (filterRule = 'all', {type, payload}) => type === "SET_FILTER_RULE" ? payload : filterRule,
    currentTask: (currentTask = {}, {type, payload}) => type === "SET_CURRENT_TASK" ? payload : currentTask,
    tasksChanges: (newChanges = '', {type, payload}) => type === "SET_CHANGES" ? payload : newChanges,
  })

// /REDUCERS