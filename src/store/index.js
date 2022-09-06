import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';

import dashboardReducer from './dashboard/reducer'
import tasksReducer from './tasks/reducer'

export const rootReducer = combineReducers({
    dashboard: dashboardReducer,
    tasks: tasksReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk))
export default store