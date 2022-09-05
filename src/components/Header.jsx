import React from 'react';
import { useContext } from "react";
import { ModalContext } from "../hoc/ModalProvider";
import { FilterContext } from '../hoc/FilterProvider';
import { ListsContext } from '../hoc/ListsProvider';

export const Header = () => {
    const { toggleModal } = useContext(ModalContext);
    const { filterTasks } = useContext(FilterContext);
    const { currentList } = useContext(ListsContext);

    const makeActive = (e) => {
        const navLinks = document.querySelectorAll('.header__nav-link');
        navLinks.forEach(link => link.classList.remove('is-active'));
        e.target.classList.add('is-active');
    };

    return (
        <div className="header">
            <span className="header__top">
                <svg className="header__top__menu" viewBox="0 0 12 10" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 1H12M12 5H0M12 9H0" stroke="#262837" strokeWidth="1.5"/>
                </svg>
                <h1 className="header__top__title">{ currentList }</h1>
            </span>
            <p className="header__bot-text">Обраний список завдань</p>
            <button className="header__btn-open-modal btn-blue btn" onClick={ toggleModal }>+ Додати нове завдання</button>
            <nav className="header__nav">
                <button 
                    href="#" 
                    className="header__nav-link is-active" 
                    value="any" 
                    onClick={ e => {filterTasks(e.target.value); makeActive(e)} }
                >
                    Всі
                </button>
                <button 
                    href="#" 
                    className="header__nav-link" 
                    value='unDone' 
                    onClick={ e => {filterTasks(e.target.value); makeActive(e)} }
                >
                    У роботі
                </button>
                <button 
                    href="#" 
                    className="header__nav-link" 
                    value='done'
                    onClick={ e => {filterTasks(e.target.value); makeActive(e)} }
                >
                    Виконані
                </button>
            </nav>
        </div>
    )
}