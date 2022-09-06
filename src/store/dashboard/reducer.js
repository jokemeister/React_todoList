import { combineReducers } from 'redux'
import { DASHBOARD_LOADED } from './actions'

function openedTasksReducer(state = {}, action) {
    // ...
}

export default combineReducers({
    today: (today = 0, {type, payload}) => type === DASHBOARD_LOADED ? payload.today : today,
    lists: (lists = [], {type, payload}) => type === DASHBOARD_LOADED ? payload.lists : lists,
    openedTasks: openedTasksReducer
})