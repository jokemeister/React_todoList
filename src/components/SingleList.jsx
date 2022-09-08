import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { ReactSVG } from 'react-svg';
import cross from  '../assets/icons/cross.svg';
import { deleteList, selectOpenedTasks } from '../store/dashboardReducer';


export const SingleList = props => {
    const { l, parent, clickHandler } = props;

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const openedTasks = useSelector(selectOpenedTasks);
    
    function deleteHandler(e, listId) {
        e.stopPropagation();
        dispatch(deleteList(listId));
        navigate('/');
    }

    if (parent === 'sidebar') {
        return (
            <li className="sidebar__list-item" onClick={() => clickHandler(l)}>
                <span className="sidebar__list-item__title">{ l.name }</span>
                <span> ({openedTasks[l.id]}) </span>
                <button className="list__remove cross-btn" onClick={ e => deleteHandler(e, l.id) }> 
                    <ReactSVG beforeInjection={src => { src.classList.add('list__remove-svg'); src.classList.add('cross-btn__svg') }} wrapper='span' src={ cross } />
                </button>
            </li>
        )
    }

    else if (parent === 'selector') {
    return (
        
            <option className='addTask__form__list-selector__option' value={ l.id }>
                { l.name }
            </option>
        )
    }
}