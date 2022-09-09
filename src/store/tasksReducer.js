import axios from 'axios';

// ACTIONS

  export const loadTasks = (endPoint, listId) => dispatch => {
    axios.get(endPoint)
      .then(res => res.data)
      .then(tasks => {
        console.log('taskReducer listId', listId);
        if (listId) {
          dispatch({
            type: "TASKS_BY_LIST",
            payload: {listId, tasks}
          }); 
        } else {
          dispatch({
            type: "TODAY_TASKS",
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
        if (listId) {
          dispatch({
            type: "UPDATE_TASK",
            payload: {updatedTask, listId}
          }); 
        } else {
          dispatch({
            type: "UPDATE_TODAY_TASK",
            payload: updatedTask
          }); 
        }

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
      // FOR TASKS
      case "TASKS_BY_LIST":
        return {...state, tasksByList: {...state.tasksByList, [payload.listId]: payload.tasks}};

      case "TODAY_TASKS":
        return {...state, today: payload}

      case "UPDATE_TASK":
        let updateRes = state.tasksByList[payload.listId].map(task => task.id === payload.updatedTask.id ? payload.updatedTask : task)
        updateRes = updateRes.filter(task => task.list_id === payload.listId)
        
        return {...state, tasksByList: {...state.tasksByList, [payload.listId]: updateRes}};

      case "UPDATE_TODAY_TASK":
        console.log('updateToday',payload);
        console.log('state today', state.today);
        console.log('state all', state);
        payload = {id: payload.id, name: payload.name, done: payload.done, due_date: payload.due_date, list: {id: payload.list_id, name: state.dashboard.lists.filter(list => list.id === payload.list_id)[0].name }};
        let updateTodayRes = state.today.map(task => task.id === payload.id ? payload : task)
        updateTodayRes = updateTodayRes.filter(task => new Date(task.due_date.split('T')[0]) < new Date())
        updateTodayRes = updateTodayRes.filter(task => new Date(task.done === false))

        return {...state, today: updateTodayRes};

      case "CREATE_TASK":
        return {...state,
          tasksByList: {...state.tasksByList, [payload.list_id]: [...state.tasksByList[payload.list_id], payload]}};

      case "DELETE_TASK":
        console.log('delete payload', payload);

        const deleteRes = state.tasksByList[payload.listId].filter(task => task.id !== payload.deletedTask[0].id);
        console.log('deleteRes', deleteRes);
        return {...state, tasksByList: {...state.tasksByList,[payload.listId]: deleteRes}};

      case "DELETE_TODAY_TASK":
        console.log('delete payload', payload);

        const deleteTodayRes = state.today.filter(task => task.id !== payload.deletedTask[0].id);
        console.log('deleteRes', deleteTodayRes);
        return {...state, today: {today: deleteTodayRes}};
      // /FOR TASKS
      
      // FOR SERVICE
        case "SET_FILTERED_TASKS":
          console.log(payload);
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