import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

export const SingleTask = (props) => {
    const {tasks, setTasks, index, t} = props

    const [task, setNewTask] = useState(t)

    const checkHandler = () => {
        setNewTask({...task, done: !task.done})
    }

    useEffect(() => {
        tasks.splice(index, 1, task);
        setTasks([...tasks]);
    }, [task])

    const deleteHandler = () => {
        tasks.splice(index, 1);
        setTasks([...tasks]);
    }

    const setClass = () => {
        let className = 'task';
        const now = new Date();
        const today = new Date(now.toISOString().split('T')[0] + 'T00:00:00');
        
        if (task.done === true) {
            className += ' done';
        }
        else if (task.due_date < today && task.due_date !== '') {
            className += ' overdue';
        }

        return className;
    }

    return (
        <div className={setClass()}>
            <span className="task__deadline">
                <svg className="task__deadline-svg" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.4998 2.33325H3.49984C2.21117 2.33325 1.1665 3.37792 1.1665 4.66659V10.4999C1.1665 11.7886 2.21117 12.8333 3.49984 12.8333H10.4998C11.7885 12.8333 12.8332 11.7886 12.8332 10.4999V4.66659C12.8332 3.37792 11.7885 2.33325 10.4998 2.33325Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M4.6665 1.16663V3.49996M9.33317 1.16663V3.49996M1.1665 5.83329H12.8332" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <p className="task__deadline-date">{ task.due_date.toISOString().split('T')[0] } </p>
            </span>
            <label className="task__body">
                <input className="task__body-checkbox" type="checkbox" checked={ task.done } onChange={ checkHandler }/>
                <div className="task__body-block">
                    <p className="task__body-title">{ task.name }</p>
                    <p className="task__body-desc">{ task.description }</p>
                </div>
                <button className="task__remove cross-btn" onClick={ deleteHandler }>
                    <svg className="task__remove-svg cross-btn__svg" version="1.1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 348.3 348.3" xmlSpace="preserve" enableBackground="new 0 0 348.333 348.334" fill="currentColor">
                        <path d="M336.6 68.6 231 174.2l105.6 105.5a40.2 40.2 0 0 1-56.9 56.9L174.2 231 68.6 336.6a40 40 0 0 1-56.8 0 40.2 40.2 0 0 1 0-56.9l105.5-105.5L11.8 68.6a40.2 40.2 0 0 1 56.8-56.8l105.6 105.5L279.7 11.8a40.2 40.2 0 0 1 56.9 56.8z"/>
                    </svg>
                </button>
            </label>
        </div>
    )
}