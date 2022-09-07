import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { setFormState, setModalState } from '../store/modalReducer';

import { ReactSVG } from 'react-svg';
import menu from '../assets/icons/menu.svg';

export const Header = () => {
    const dispatch = useDispatch();
    const currentList = useSelector(state => state.dashboard.currentList)
    const modalState = useSelector(state => state.modal.modalState)

    function makeActive(e) {
        const navLinks = document.querySelectorAll('.header__nav-link');
        navLinks.forEach(link => link.classList.remove('is-active'));
        e.target.classList.add('is-active');
    };

    function setFilterRule(rule) {
        dispatch({type: "SET_FILTER_RULE", payload: rule})
    };

    function openClickHandler() {
        dispatch(setFormState('create'));
        toggleModal();
    };

    function toggleModal() {
        console.log(modalState);
        dispatch(setModalState(!modalState));
    };

    return (
        <div className="header">
            <span className="header__top">
                <ReactSVG beforeInjection={ src => src.classList.add("header__top__menu") } wrapper='span' src={ menu } />
                <h1 className="header__top__title">{ currentList }</h1>
            </span>
            <p className="header__bot-text">Обраний список завдань</p>
            <button className="header__btn-open-modal btn-blue btn" onClick={ openClickHandler }>+ Додати нове завдання</button>
            <nav className="header__nav">
                <button 
                    href="#" 
                    className="header__nav-link is-active" 
                    value="any" 
                    onClick={ e => {setFilterRule(e.target.value); makeActive(e)} }
                >
                    Всі
                </button>
                <button 
                    href="#" 
                    className="header__nav-link" 
                    value='unDone' 
                    onClick={ e => {setFilterRule(e.target.value); makeActive(e)} }
                >
                    У роботі
                </button>
                <button 
                    href="#" 
                    className="header__nav-link" 
                    value='done'
                    onClick={ e => {setFilterRule(e.target.value); makeActive(e)} }
                >
                    Виконані
                </button>
            </nav>
        </div>
    )
}