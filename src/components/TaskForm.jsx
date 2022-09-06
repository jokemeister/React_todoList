import React, { useContext }  from "react";
import { useEffect } from "react";
import { useState } from "react";
import { ModalContext } from "../hoc/ModalProvider";
import { TaskContext } from "../hoc/TaskProvider";
import { Lists } from "./Lists";

import { ReactSVG } from 'react-svg';
import cross from '../assets/icons/cross.svg';
import clock from '../assets/icons/clock.svg';
import book from '../assets/icons/book.svg';
import list from '../assets/icons/list.svg';

export const TaskForm = props => {

  const { createTask, updateTask } = props;
  const { modalState, toggleModal, formState } = useContext(ModalContext);
  const { currentTask } = useContext(TaskContext);
  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');
  const [due_date, setDueDate] = useState('');
  const [list_id, setListId] = useState(1);
  
  useEffect(() => {
    if (currentTask.name) {
        setName(currentTask.name);
        setDesc(currentTask.description);
        setDueDate(currentTask.due_date.split('T')[0]);
        console.log(currentTask);
        setListId(currentTask.list_id ? currentTask.list_id : currentTask.list.id);
    }
    newTask.done = currentTask.done;
  }, [currentTask])

  const modalClass = () => {
    let modalClass = "addTask-modal";
    if (modalState) {
      modalClass += " is-active"
    };

    return modalClass;
  }

  const newTask = {
    name: name,
    description: desc,
    done: false,
    due_date: new Date(due_date),
    list_id: list_id
    };
    
    const submitHandler = (e) => {
        e.preventDefault();
        if (!formValidation(e)) return;

        if (formState === 'create') {
            return createTask(newTask);
        } else {
            return updateTask(currentTask.id, newTask);
        }

    }

    function formValidation(e) {
        if (!name.length > 0) {
            console.log(e.target.name);
            e.target.name.classList.add('invalid');
        } else e.target.name.classList.remove('invalid');

        return name.length > 0;
    }

    function cleaner(e) {
        if (!e.target.name.classList.contains('invalid')) {
            setName('');
            setDesc('');
            setDueDate('');
            setListId(1);
        } else return

    }

  return (
    <div className={ modalClass() } onClick={ toggleModal }>
      <div className="addTask-modal-content" onClick={ (e) => e.stopPropagation() }>
          <div className="addTask-modal__header">
              <p className="addTask-modal__title">Створити нове завдання</p>
              <button className="addTask-modal__close-btn cross-btn" onClick={ toggleModal }>
                  <ReactSVG beforeInjection={src => { src.classList.add('addTask-modal__close-btn__svg'); src.classList.add('cross-btn__svg') }} wrapper='span' src={ cross } />
              </button>
          </div>
          <form className="addTask__form" name="addTask" onSubmit={ e => { submitHandler(e); cleaner(e) }} >
              <label className="addTask__form__deadline-label">
                  <p>
                      <ReactSVG beforeInjection={src => src.classList.add('addTask__form__deadline-label__svg') } wrapper='span' src={ clock } />
                      Термін виконання
                  </p>
                  <input className="addTask__form__deadline-input" type="text" placeholder="2022-08-28" name="due_date" value={ due_date } onChange={ e => setDueDate(e.target.value) } />
                  <span></span>
              </label>
    
              <label className="addTask__form__name-label">
                  <p>
                      <ReactSVG beforeInjection={src => src.classList.add('addTask__form__name-label__svg') } wrapper='span' src={ book } />
                      Назва завдання
                  </p>
                  <input className="addTask__form__name-input" type="text" placeholder="Зробити якусь справу" name="name" value={ name } onChange={ e => setName(e.target.value) } />
                  <span className="addTask__form__name-error-msg error-msg">Обов'язкове поле</span>
              </label>
    
              <label className="addTask__form__desc-label">
                  <p>
                      <ReactSVG beforeInjection={src => src.classList.add('addTask__form__desc-label__svg') } wrapper='span' src={ list } />
                      Опис
                  </p>
                  <textarea className="addTask__form__desc-input" placeholder="Зробити і те, і інше" name="description" value={ desc } onChange={ e => setDesc(e.target.value) } ></textarea>
              </label>

              <label className="addTask__form__list-label">
                    <p>
                        <ReactSVG beforeInjection={src => src.classList.add('addTask__form__list-label__svg') } wrapper='span' src={ list } />
                        Список
                    </p>
                    <select className="addTask__form__list-selector" name="list_id" value={ list_id } onChange={ e => setListId(e.target.value) } >
                        <Lists parent='selector'/>
                    </select>
                </label>
              
              <div className="addTask__form__btn-block">
                  <button className="addTask__form__btn btn-blue btn" type="submit">Створити</button>
                  <button className="addTask-modal__close-btn addTask__form__btn btn-gray btn" type="button" onClick={ toggleModal }>Скасувати</button>
              </div>
          </form>
      </div>
    </div>
  )
}

