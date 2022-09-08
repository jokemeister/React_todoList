import axios from 'axios';

// ACTIONS

  export const loadTasks = (endPoint, listId) => dispatch => {
    axios.get(endPoint)
      .then(res => res.data)
      .then(tasks => {
        if (listId) {
          dispatch({
            type: "TASKS_BY_LIST",
            payload: {listId, tasks}
          }); 
        } else if (endPoint.includes('today')) {
          dispatch({
            type: "TODAY_TASKS",
            payload: tasks
          }); 
        } else {
          dispatch({
            type: "TASKS_LOADED",
            payload: tasks
          }); 
        }

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

  export const deleteOneTask = (taskId, listId) => dispatch => {
    return axios.delete(`http://localhost:4000/tasks/${taskId}`)
      .then(res => res.data)
      .then(deletedTask => { 
        dispatch({
          type: "DELETE_TASK",
          payload: {deletedTask, listId}
        }); 
      })
      // .catch(err => { throw new Error(err) })
  }

  export const updateOneTask = (taskId, newValues, listId) => dispatch => {
    return axios.patch(`http://localhost:4000/tasks/${taskId}`, newValues)
      .then(res => res.data)
      .then(updatedTask => { 
        dispatch({
          type: "UPDATE_TASK",
          payload: {updatedTask, listId}
        }); 
      })
      // .catch(err => { throw new Error(err) })
  }

// /ACTIONS

// REDUCERS

  const defaultState = {
    allTasks: [],
    today: [],
    tasksByList: {},
    filteredTasks: [],
    filterRule: 'all',
    currentTask: {}
  }


  export const tasksReducer = (state = defaultState, {type, payload}) => {
    switch(type) {
      // FOR ALL TASKS
        case "TASKS_LOADED":
          return {...state, allTasks: payload};

        case "UPDATE_TASK":
          let updateRes = state.tasksByList[payload.listId].map(task => task.id === payload.updatedTask.id ? payload.updatedTask : task)
          updateRes = updateRes.filter(task => task.list_id === payload.listId)
          
          return {...state, 
            allTasks: {...state.allTasks, ...updateRes},
            tasksByList: {...state.tasksByList,[payload.listId]: updateRes}};

        case "CREATE_TASK":
          return {...state,
            allTasks: {...state.allTasks, payload}, 
            tasksByList: {...state.tasksByList, [payload.list_id]: [...state.tasksByList[payload.list_id], payload]}};
  
        case "DELETE_TASK":
          console.log(payload);
          const deleteRes = state.tasksByList[payload.listId].filter(task => task.id === payload.deletedTask.id);
          const deleteAtAllRes = state.allTasks.filter(task => task.id === payload.deletedTask.id);
          return {...state, 
            allTasks: {...state.allTasks, ...deleteAtAllRes},
            tasksByList: {...state.tasksByList,[payload.listId]: deleteRes}};
      // /FOR ALL TASKS

      // FOR TODAY TASKS
        case "TODAY_TASKS":
          return {...state, today: payload}

        case "UPDATE_TODAY_TASK":
          let updateTodayRes = state.tasksByList[payload.listId].map(task => task.id === payload.updatedTask.id ? payload.updatedTask : task)
          updateTodayRes = updateTodayRes.filter(task => task.list_id === payload.listId)
          
          return {...state, 
          today: {...state.today, ...updateTodayRes},
          tasksByList: {...state.tasksByList,[payload.listId]: updateTodayRes}};
          
        case "CREATE_TODAY_TASK":
          return {...state,
            allTasks: {...state.allTasks, payload}, 
            tasksByList: {...state.tasksByList, [payload.list_id]: [...state.tasksByList[payload.list_id], payload]}};
      // /FOR TODAY TASKS

      // FOR TASKS IN LIST
        case "TASKS_BY_LIST":
          return {...state, tasksByList: {...state.tasksByList,[payload.listId]: payload.tasks}};
      // /FOR TASKS IN LIST
      
      // FOR SERVICE
        case "SET_FILTERED_TASKS":
          return {...state, filteredTasks: payload};
          
        case "SET_FILTER_RULE":
          return {...state, filterRule: payload};

        case "SET_CURRENT_TASK":
          return {...state, currentTask: payload};
      // /FOR SERVICE

      default:
        return state;
    }

  }
// /REDUCERS