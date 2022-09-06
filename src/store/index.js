import { combineReducers, applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';

import { dashboardReducer } from './dashboard/reducer.js';
import { tasksReducer } from './tasks/reducer.js';

const rootReducer = combineReducers({
    dashboard: dashboardReducer,
    tasks: tasksReducer
})

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
  // localStorage.state && JSON.parse(localStorage.state),
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// store.subscribe(() => {
//   localStorage.setItem('state', JSON.stringify(store.getState()))
// });

export default store;