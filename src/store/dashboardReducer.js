import axios from 'axios';
import { createSelector } from 'reselect';

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
          type: "CREATE_LIST",
          payload: newList
        })
      })
      .catch(err => { throw new Error(err)})
  }

  export const deleteList = listId => dispatch => {
    return axios.delete(`http://localhost:4000/lists/${listId}`)
      .then(res => res.data)
      .then(deletedList => {
        dispatch({
          type: "DELETE_LIST",
          payload: deletedList[0]
        })
      })
      .catch(err => {throw new Error(err)})
  }

  export const setCurrentList = (payload) => ({type: "SET_CURRENT_LIST", payload});

// /ACTIONS

// SELECTORS
  export const selectOpenedTasks = createSelector(
    state => state.dashboard.openedTasks, 
    state => state.tasks.tasksByList, 
    (openedTasks, tasksByList) => {
      // console.log('openedTasks old', openedTasks);
      // console.log('tasksByList', tasksByList);
      let undoneTasks = Object.entries(tasksByList).map(([listId, tasks]) => [
        listId,
        tasks.reduce((countOfUndone, task) => task.done ? countOfUndone : countOfUndone+1, 0)
      ])
      // console.log('NewTasks', undoneTasks);
      // console.log('obj', Object.fromEntries(undoneTasks));
      // console.log('asdadsas oibs', Object.assign({}, openedTasks, Object.fromEntries(undoneTasks)));
      return Object.assign({}, openedTasks, Object.fromEntries(undoneTasks));
    }
  )
// /SELECTORS

// REDUCERS

  const defaultState = {
    today: 0,
    lists: [],
    currentList: 'Усі завдання',
    openedTasks: {}
  }

  export const dashboardReducer = (state = defaultState, {type, payload}) => {
    switch(type) {
      case "DASHBOARD_LOADED":
        let openedTasks = {}
        payload.lists.forEach(list => {
          openedTasks = {...openedTasks, [list.id]: parseInt(list.undone)}
        });
        return {...state, today: payload.today, lists: payload.lists, openedTasks: openedTasks };

      case "SET_CURRENT_LIST":
        return {...state, currentList: payload};

      case "CREATE_LIST":
        return {...state, lists: [...state.lists, payload]};

      case "DELETE_LIST":
        const deleteRes = state.lists.filter(list => list.id !== payload.id);
        return {...state, lists: deleteRes};

      default:
        return state;
    }

  }

// /REDUCERS