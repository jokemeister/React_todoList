import React from "react";
import { useContext } from "react";
import { ModalContext } from "../hoc/ModalProvider";

export const TaskForm = () => {
  const { modalState, toggleModal } = useContext(ModalContext);

  const modalClass = () => {
    let modalClass = "addTask-modal";
    if (modalState) {
      modalClass += " is-active"
    };

    return modalClass;
  }

  return (
    <div className={ modalClass() } onClick={ toggleModal }>
      <div className="addTask-modal-content">
          <div className="addTask-modal__header">
              <p className="addTask-modal__title">Створити нове завдання</p>
              <button className="addTask-modal__close-btn cross-btn" onClick={ toggleModal }>
                  <svg className="addTask-modal__close-btn__svg cross-btn__svg" version="1.1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 348.3 348.3" xmlSpace="preserve" enableBackground="new 0 0 348.333 348.334" fill="currentColor">
                      <path d="M336.6 68.6 231 174.2l105.6 105.5a40.2 40.2 0 0 1-56.9 56.9L174.2 231 68.6 336.6a40 40 0 0 1-56.8 0 40.2 40.2 0 0 1 0-56.9l105.5-105.5L11.8 68.6a40.2 40.2 0 0 1 56.8-56.8l105.6 105.5L279.7 11.8a40.2 40.2 0 0 1 56.9 56.8z"/>
                  </svg>
              </button>
          </div>
          <form className="addTask__form" name="addTask">
              <label className="addTask__form__deadline-label">
                  <p>
                      <svg className="addTask__form__deadline-label__svg" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="7" cy="7" r="6.35" stroke="#262837" strokeWidth="1.3"/>
                          <path d="M8 3V6.75V8H4" stroke="#262837" strokeWidth="1.4" strokeLinejoin="round"/>
                      </svg>
                      Термін виконання
                  </p>
                  <input className="addTask__form__deadline-input" type="text" name="due_date" placeholder="2022-08-28" />
                  <span></span>
              </label>
    
              <label className="addTask__form__name-label">
                  <p>
                      <svg className="addTask__form__name-label__svg" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect x="0.5" y="0.5" width="11" height="11" rx="1.5" stroke="#262837" strokeLinejoin="round"/>
                          <path d="M11.1431 8.57129H0.857422V11.1427H11.1431V8.57129Z" fill="#262837" stroke="#262837" strokeLinecap="round" strokeLinejoin="round"/>
                          <circle cx="10.7137" cy="9.85728" r="0.428571" fill="white"/>
                          <path d="M1.28516 9.85693H7.71373" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>    
                      Назва завдання
                  </p>
                  <input className="addTask__form__name-input" type="text" name="name" placeholder="Do some work" />
                  <span className="addTask__form__name-error-msg error-msg">Обов'язкове поле</span>
              </label>
    
              <label className="addTask__form__desc-label">
                  <p>
                      <svg className="addTask__form__desc-label__svg" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M1 2H6.7H13" stroke="#262837" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M1 4.5H13M1 7H13M1 9.5H13M1 12C1.48 12 6.8 12 9.4 12" stroke="#262837" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      Опис
                  </p>
                  <textarea className="addTask__form__desc-input" name="description" placeholder="Do all the work in the right way"></textarea>
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

