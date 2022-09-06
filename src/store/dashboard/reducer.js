import { combineReducers } from 'redux'
import { DASHBOARD_LOADED } from './actions'

const defaultState = {
  today: 0,
  lists: [],
  currentList: 'Усі завдання',
  newList: ''
}

export function dashboardReducer(state = defaultState, action) {
  switch (action.type) {
    case "SET_TODAY":
      return {...state, today: action.payload};
    case "SET_LISTS":
      return {...state, lists: action.payload};
    case "SET_CURRENT_LIST":
      return {...state, currentList: action.payload};
    case "SET_NEW_LIST":
      return {...state, newList: action.payload};
    default: 
      return state;
  };
}