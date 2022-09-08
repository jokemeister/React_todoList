import React from 'react';
import { useState } from 'react';
import { Dashboard } from './Dashboard';

import { useDispatch } from 'react-redux';
import { createNewList } from '../store/dashboardReducer';

import { ReactSVG } from 'react-svg';
import logo from '../assets/icons/logo.svg';
import exit from  '../assets/icons/exit.svg';

export const Sidebar = () => {
    const [listName, setListName] = useState('');
    const dispatch = useDispatch();
    
    function createList(e) {
        e.preventDefault();
        dispatch(createNewList(listName));
        setListName('');
    }

    return (
        <aside className="sidebar">
            <div className="sidebar__header">
                <ReactSVG wrapper='span' beforeInjection={ svg => svg.classList.add("sidebar__header__logo")} src={ logo } />
                <div className="sidebar__header__text-block">
                    <p className="sidebar__header__tool">Onboarding Tool</p>
                    <p  className="sidebar__header__developer">Software Planet Group</p>
                </div>
            </div>
            <Dashboard />
            <form className="sidebar__addList-block" name="list" onSubmit={createList}>
                <label className="sidebar__addList-block__label">
                    <input className="sidebar__addList-block__input" type="text" placeholder="Назва списку" name="listName" value={listName} onChange={e => setListName(e.target.value)} />
                    <span className="sidebar__addList-block__error-msg error-msg">Обов'язкове поле</span>
                </label>
                <button type="submit" className="btn btn-blue sidebar__addList-block__btn">Додати список</button>
            </form>

            <div className="sidebar__footer">
                <span className="sidebar__footer__logo"></span>
                <p className="sidebar__footer__user">Коваленко А.</p>
                <ReactSVG wrapper='span' beforeInjection={ svg => svg.classList.add("sidebar__footer__exit")} src={ exit } />
            </div>
        </aside>
    )
}