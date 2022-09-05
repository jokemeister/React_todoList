import React, { createContext, useState } from 'react';

export const ModalContext = createContext(false);

export const ModalProvider = ({ children }) => {
  const [ modalState, setModalState ] = useState(false);
  const [ formState, setFormState ] = useState('create');
  const toggleModal = () => {
    setModalState(!modalState);
  }

  const modalData = { modalState, toggleModal, formState, setFormState }
  return (
    <ModalContext.Provider value={ modalData }>
      { children }
    </ModalContext.Provider>
  )
}

