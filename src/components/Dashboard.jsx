import React, { useContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { ListsContext } from '../hoc/ListsProvider';
import { RequestsContext } from '../hoc/RequestsProvider';
import { Lists } from './Lists';

export const Dashboard = () => {
  const navigate = useNavigate();
  const [today, setToday] = useState([]);
  const { setLists, setCurrentList } = useContext(ListsContext);
  const { getDashboard } = useContext(RequestsContext)

  useEffect(() => {
    getDashboard().then(dashboard => {
      setLists(dashboard.lists);
      setToday(dashboard.today);
    })
  }, [])

  const clickHandler = (e, l) => {
    if (l) {
      navigate(`/todo-list/${l.id}`)
    } 
    const listElements = document.querySelectorAll('.sidebar__list-item');
    const listTitle = e.currentTarget.querySelector('.sidebar__list-item__title');

    listElements.forEach(el => el.classList.remove('is-active'));
    e.currentTarget.classList.add('is-active');
    setCurrentList(listTitle.textContent);
  } 

  return (
    <ul className="sidebar__list">
      <NavLink to="/tasks">
          <li className="sidebar__list-item default-list is-active" onClick={clickHandler}>
              <span className='sidebar__list-item__title'>Усі завдання</span>
              <button className="list__remove cross-btn">
                  <svg className="list__remove-svg cross-btn__svg" version="1.1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 348.3 348.3" xmlSpace="preserve" enableBackground="new 0 0 348.333 348.334" fill="currentColor">
                      <path d="M336.6 68.6 231 174.2l105.6 105.5a40.2 40.2 0 0 1-56.9 56.9L174.2 231 68.6 336.6a40 40 0 0 1-56.8 0 40.2 40.2 0 0 1 0-56.9l105.5-105.5L11.8 68.6a40.2 40.2 0 0 1 56.8-56.8l105.6 105.5L279.7 11.8a40.2 40.2 0 0 1 56.9 56.8z"/>
                  </svg>
              </button>
          </li>
      </NavLink>
      <NavLink to="/today">
          <li className="sidebar__list-item default-list" onClick={clickHandler}>
              <span className='sidebar__list-item__title'>На сьогодні: </span>
              <span>{ today }</span>
              <button className="list__remove cross-btn">
                  <svg className="list__remove-svg cross-btn__svg" version="1.1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 348.3 348.3" xmlSpace="preserve" enableBackground="new 0 0 348.333 348.334" fill="currentColor">
                      <path d="M336.6 68.6 231 174.2l105.6 105.5a40.2 40.2 0 0 1-56.9 56.9L174.2 231 68.6 336.6a40 40 0 0 1-56.8 0 40.2 40.2 0 0 1 0-56.9l105.5-105.5L11.8 68.6a40.2 40.2 0 0 1 56.8-56.8l105.6 105.5L279.7 11.8a40.2 40.2 0 0 1 56.9 56.8z"/>
                  </svg>
              </button>
          </li>
      </NavLink>
      <Lists parent={ 'sidebar' } clickHandler={ clickHandler }/>
    </ul>

  )
}