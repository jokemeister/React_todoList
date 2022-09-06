import { createStore } from 'redux';

import rootReducer from './store';

const store = createStore(
  rootReducer,
  localStorage.state && JSON.parse(localStorage.state),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => {
  localStorage.setItem('state', JSON.stringify(store.getState()))
});

export default store;