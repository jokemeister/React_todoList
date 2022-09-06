import React, { useContext } from 'react';
import { useEffect } from 'react';
import { NavLink, useLocation, useNavigate, useParams } from 'react-router-dom';
import { RequestsContext } from '../hoc/RequestsProvider';
import { Lists } from './Lists';

import { ReactSVG } from 'react-svg';
import cross from  '../assets/icons/cross.svg';
import { useDispatch, useSelector } from 'react-redux';

export const Dashboard = () => {
  // ROUTER
  const navigate = useNavigate();
  const location = useLocation();
  let { listId } = useParams();
  listId = parseInt(listId)
  // /ROUTER
  const { getDashboardReq } = useContext(RequestsContext)
  // REDUX 
  const dispatch = useDispatch();
  const today = useSelector(state => state.dashboard.today);
  const currentList = useSelector(state => state.dashboard.currentList);
  const newList = useSelector(state => state.dashboard.newList);
  const currentTask = useSelector(state => state.tasks.currentTask);
  // /REDUX

  function setToday(count) {
    dispatch({type:"SET_TODAY", payload: count})
  }

  function setLists(array) {
    dispatch({type:"SET_LISTS", payload: array})
  }

  function setCurrentList(listName) {
    dispatch({type:"SET_CURRENT_LIST", payload: listName})
  }

  useEffect(() => {
    getDashboardReq().then(dashboard => {
      setLists(dashboard.lists);
      setToday(dashboard.today);
      setActiveList(dashboard.lists);
    })
  }, [location.pathname, newList, currentTask]);

  useEffect(() => {
    setActiveClass();
  }, [currentList])

  function setActiveList(lists) {
    if (location.pathname === '/today') {
     setCurrentList('На сьогодні');
    } else if (location.pathname === '/tasks') {
     setCurrentList('Усі завдання');
    } else {
     setCurrentList(lists.filter(l => l.id === listId)[0].name);
    };
  };

  function setActiveClass() {
    const listItems = document.querySelectorAll('.sidebar__list-item');
    listItems.forEach(item => {
      item.classList.remove('is-active');
      const title = item.querySelector('.sidebar__list-item__title');
      if (title.textContent === currentList) item.classList.add('is-active');
    })
  }

  const clickHandler = (l) => {
    if (l) {
      navigate(`/todo-list/${l.id}`)
    }
  };

  return (
    <ul className="sidebar__list">
      <NavLink to="/tasks">
          <li className="sidebar__list-item default-list" onClick={ clickHandler }>
              <span className='sidebar__list-item__title'>Усі завдання</span>
              <button className="list__remove cross-btn">
                <ReactSVG beforeInjection={src => { src.classList.add('list__remove-svg'); src.classList.add('cross-btn__svg') }} wrapper='span' src={ cross } />
              </button>
          </li>
      </NavLink>
      <NavLink to="/today">
          <li className="sidebar__list-item default-list" onClick={ clickHandler }>
              <span className='sidebar__list-item__title'>На сьогодні</span>
              <span>: { today }</span>
              <button className="list__remove cross-btn">
                <ReactSVG beforeInjection={src => { src.classList.add('list__remove-svg'); src.classList.add('cross-btn__svg') }} wrapper='span' src={ cross } />
              </button>
          </li>
      </NavLink>
      <Lists parent={ 'sidebar' } clickHandler={ clickHandler }/>
    </ul>

  )
}