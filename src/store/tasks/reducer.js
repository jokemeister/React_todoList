import { combineReducers } from 'redux'
import { TASKS_LOADED } from './actions'

const defaultState = {
  tasks: [],
  filteredTasks: [],
  filterRule: 'all',
  currentTask: 'Усі завдання',
}

export function tasksReducer(state = defaultState, action) {
  switch (action.type) {
    case "SET_TASKS":
      return {...state, tasks: action.payload};
    case "SET_FILTERED_TASKS":
      return {...state, filteredTasks: action.payload};
    case "SET_FILTER_RULE":
      return {...state, filterRule: action.payload};
    case "SET_CURRENT_TASK":
      return {...state, currentTask: action.payload};
    default: 
      return state;
  };
}