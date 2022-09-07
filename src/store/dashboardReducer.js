import { combineReducers } from 'redux'
import axios from 'axios';

// ACTIONS
  export const loadDashboard = dispatch => {
    axios.get('http://localhost:4000/dashboard')
      .then(res => res.data)
      .then(dashboard => { 
        dispatch({
          type: "DASHBOARD_LOADED",
          payload: dashboard
        }); 
      })
      .catch(err => { throw new Error(err)})
  }

  export const createNewList = name => dispatch => {
    return axios.post('http://localhost:4000/lists', {'name': name})
      .then(res => res.data)
      .then(newList => {
        dispatch({
          type: "SET_NEW_LIST",
          payload: newList
        })
      })
      .catch(err => { throw new Error(err)})
  }

  export const deleteList = listId => dispatch => {
    return axios.delete(`http://localhost:4000/lists/${listId}`)
      .then(res => res.data)
      .catch(err => {throw new Error(err)})
  }

  export const setCurrentList = (payload) => ({type: "SET_CURRENT_LIST", payload});
  export const setNewList = (payload) => ({type: "SET_NEW_LIST", payload});
// /ACTIONS

// REDUCERS
  // function openedTasksReduceer(state = {}, action) {

  // }

  export const dashboardReducer = combineReducers({
    today: (today = 0, {type, payload}) => type === "DASHBOARD_LOADED" ? payload.today : today,
    lists: (lists = [], {type, payload}) => type === "DASHBOARD_LOADED" ? payload.lists : lists,
    currentList: (currentList = 'Усі завдання', {type, payload}) => type === "SET_CURRENT_LIST" ? payload : currentList,
    newList: (newList = '', {type, payload}) => type === "SET_NEW_LIST" ? payload : newList,
    // openedTasks: openedTasksReducer
  })
// /REDUCERS