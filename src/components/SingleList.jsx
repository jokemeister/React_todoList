import React from 'react';

export const SingleList = props => {
    const { l, parent, clickHandler } = props;

    if (parent === 'sidebar') {
        return (
            <li className="sidebar__list-item" onClick={e => clickHandler(e, l)}>
                <span className="sidebar__list-item__title">{ l.name }</span>
                <button className="list__remove cross-btn">
                    <svg className="list__remove-svg cross-btn__svg" version="1.1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 348.3 348.3" xmlSpace="preserve" enableBackground="new 0 0 348.333 348.334" fill="currentColor">
                        <path d="M336.6 68.6 231 174.2l105.6 105.5a40.2 40.2 0 0 1-56.9 56.9L174.2 231 68.6 336.6a40 40 0 0 1-56.8 0 40.2 40.2 0 0 1 0-56.9l105.5-105.5L11.8 68.6a40.2 40.2 0 0 1 56.8-56.8l105.6 105.5L279.7 11.8a40.2 40.2 0 0 1 56.9 56.8z"/>
                    </svg>
                </button>
            </li>
        )
    }

    else if (parent === 'selector') {
    return (
            <option className='addTasl__form__list-selector__option' value={ l.id }>
                { l.name }
            </option>
        )
    }
}