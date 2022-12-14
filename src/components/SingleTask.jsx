import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { setFormState, setModalState } from '../store/modalReducer';

import { NavLink } from 'react-router-dom';

import { ReactSVG } from 'react-svg';
import calendar from '../assets/icons/calendar.svg';
import cross from '../assets/icons/cross.svg';

export const SingleTask = (props) => {
    const { task, updateTask, deleteTask, addBadge } = props

    const dispatch = useDispatch();
    const modalState = useSelector(state => state.modal.modalState);
    const formState = useSelector(state => state.modal.formState);

    function checkHandler () {
        updateTask(task.id, {done: !task.done}, task.list_id)
    }

    function deleteHandler() {
        deleteTask(task.id, task.list_id)  
    }

    function setCurrentTask(task) {
        dispatch({type: "SET_CURRENT_TASK", payload: task})
    }

    function toggleModal() {
        dispatch(setModalState(!modalState))
    }

    const setClass = () => {
        let className = 'task';

        const now = new Date();
        const today = new Date(now.toISOString().split('T')[0] + 'T00:00:00');
        
        if (task.done === true) {
            className += ' done';
        }
        else if (task.due_date < today && task.due_date !== '' && task.due_date !== null) {
            className += ' overdue';
        }
        return className;
    }

    function updateClickHandler(e) {
        e.preventDefault();
        e.stopPropagation();
        dispatch(setFormState('update'))
        setCurrentTask(task);  
        toggleModal();
    }

    return (
        <div className={ setClass() } onContextMenu={ updateClickHandler }>
            <span className="task__deadline">
                <ReactSVG wrapper='span' beforeInjection={ svg => svg.classList.add("task__deadline-svg")} src={ calendar } />
                <p className="task__deadline-date">{ task.due_date ? task.due_date.split('T')[0] : task.due_date } </p>
            </span>
            <label className="task__body">
                <input className="task__body-checkbox" type="checkbox" checked={ task.done } onChange={ checkHandler }/>
                <div className="task__body-block">
                    <p className="task__body-title">{ task.name }</p>
                    <p className="task__body-desc">{ task.description }</p>
                </div>
                <div className="task__body-right">
                    <button className="task__remove cross-btn" onClick={ deleteHandler }>
                        <ReactSVG beforeInjection={src => { src.classList.add('task__remove-svg'); src.classList.add('cross-btn__svg') }} wrapper='div' src={ cross } />
                    </button>
                    {
                        addBadge &&
                        <NavLink className="task__body-badge" to={`/todo-list/${task.list?.id ? task.list.id : task.list_id}`}>
                            {task.list?.name}
                        </NavLink>
                    }
                </div>
            </label>
        </div>
    )
}