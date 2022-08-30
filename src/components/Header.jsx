import React from 'react';

export const Header = () => {
    return (
        <div className="header">
            <span className="header__top">
                <svg className="header__top__menu" viewBox="0 0 12 10" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 1H12M12 5H0M12 9H0" stroke="#262837" strokeWidth="1.5"/>
                </svg>
                <h1 className="header__top__title">Поточні завдання</h1>
            </span>
            <p className="header__bot-text">Загальна дошка в системі, що містить поточні завдання для всіх контракторів</p>
            <button className="header__btn-open-modal btn-blue btn">+ Додати нове завдання</button>
            <nav className="header__nav">
                <button href="#" className="header__nav-link is-active" value="show-all">Всі</button>
                <button href="#" className="header__nav-link" value="show-unDone">У роботі</button>
                <button href="#" className="header__nav-link" value="show-done">Виконані</button>
            </nav>
        </div>
    )
}