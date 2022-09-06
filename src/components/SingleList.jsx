import React from 'react';

import { ReactSVG } from 'react-svg';
import cross from  '../assets/icons/cross.svg';

export const SingleList = props => {
    const { l, parent, clickHandler } = props;


    if (parent === 'sidebar') {
        return (
            <li className="sidebar__list-item" onClick={() => clickHandler(l)}>
                <span className="sidebar__list-item__title">{ l.name }</span>
                <button className="list__remove cross-btn">
                    <ReactSVG beforeInjection={src => { src.classList.add('list__remove-svg'); src.classList.add('cross-btn__svg') }} wrapper='span' src={ cross } />
                </button>
            </li>
        )
    }

    else if (parent === 'selector') {
    return (
        
            <option className='addTask__form__list-selector__option' value={ l.id }>
                { l.name }
                {console.log( l.name, l.id)}
            </option>
        )
    }
}