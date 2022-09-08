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
          type: "CREATE_TASK",
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
          type: "DELETE_TASK",
          payload: deletedTask
        }); 
      })
      .catch(err => { throw new Error(err) })
  }

  export const updateOneTask = (taskId, newValues, listId) => dispatch => {
    console.log(taskId, newValues, listId);
    return axios.patch(`http://localhost:4000/tasks/${taskId}`, newValues)
      .then(res => res.data)
      .then(updatedTask => { 
        dispatch({
          type: "UPDATE_TASK",
          payload: {updatedTask, listId}
        }); 
      })
      .catch(err => { throw new Error(err) })
  }

// /ACTIONS

// REDUCERS

  const defaultState = {
    allTasks: [],
    filteredTasks: [],
    filterRule: 'all',
    currentTask: {},
    tasksChanges: {},
    openedTasks: {}
  }


  export const tasksReducer = (state = defaultState, {type, payload}) => {
    switch(type) {
      case "TASKS_LOADED":
        return {...state, allTasks: payload};

      case "SET_FILTERED_TASKS":
        console.log(payload);
        return {...state, filteredTasks: payload};

      case "SET_FILTER_RULE":
        return {...state, filterRule: payload};

      case "SET_CURRENT_TASK":
        return {...state, currentTask: payload};

      case "CREATE_TASK":
        return {...state, allTasks: [...state.allTasks, payload]};

      case "UPDATE_TASK":
        console.log('update payload', payload);
        console.log(state.allTasks);
        let updateRes = state.allTasks.map(task => task.id === payload.updatedTask.id ? payload.updatedTask : task)
        updateRes = updateRes.filter(task => task.listId === payload.listId)
        return {...state, allTasks: updateRes};

      case "DELETE_TASK":
        const deleteRes = state.allTasks.filter(task => task.id === payload.id);
        return {...state, allTasks: deleteRes};

      default:
        return state;
    }

  }

  // export const tasksReducer = combineReducers({
  //   tasks: (tasks = [], {type, payload}) => type === "TASKS_LOADED" ? payload : tasks,
  //   filteredTasks: (filteredTasks = [], {type, payload}) => type === "SET_FILTERED_TASKS" ? payload : filteredTasks,
  //   filterRule: (filterRule = 'all', {type, payload}) => type === "SET_FILTER_RULE" ? payload : filterRule,
  //   currentTask: (currentTask = {}, {type, payload}) => type === "SET_CURRENT_TASK" ? payload : currentTask,
  //   tasksChanges: (tasksChanges = {}, {type, payload}) => type === "SET_CHANGES" ? payload : tasksChanges,
  // })

// /REDUCERS