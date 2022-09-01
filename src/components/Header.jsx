import React from 'react';
import { useContext } from "react";
import { ListContext } from "../hoc/ListProvider";
import { ModalContext } from "../hoc/ModalProvider";
import { FilterContext } from '../hoc/FilterProvider';

export const Header = () => {
    const { list } = useContext(ListContext);
    const { toggleModal } = useContext(ModalContext);
    const { addRule } = useContext(FilterContext);

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
                <h1 className="header__top__title">{ list }</h1>
            </span>
            <p className="header__bot-text">Обраний список завдань</p>
            <button className="header__btn-open-modal btn-blue btn" onClick={ toggleModal }>+ Додати нове завдання</button>
            <nav className="header__nav">
                <button 
                    href="#" 
                    className="header__nav-link is-active" 
                    value="any" 
                    onClick={ e => {addRule('done', e.target.value); makeActive(e)} }
                >
                    Всі
                </button>
                <button 
                    href="#" 
                    className="header__nav-link" 
                    value={ false } 
                    onClick={ e => {addRule('done', e.target.value); makeActive(e)} }
                >
                    У роботі
                </button>
                <button 
                    href="#" 
                    className="header__nav-link" 
                    value={ true } 
                    onClick={ e => {addRule('done', e.target.value); makeActive(e)} }
                >
                    Виконані
                </button>
            </nav>
        </div>
    )
}