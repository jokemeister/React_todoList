import { combineReducers, applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';

import { dashboardReducer } from './dashboardReducer';
import { modalReducer } from './modal/reducer.js';
import { tasksReducer } from './tasksReducer';

const rootReducer = combineReducers({
    dashboard: dashboardReducer,
    tasks: tasksReducer,
    modal: modalReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

export default store;