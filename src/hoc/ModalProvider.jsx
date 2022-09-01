import React, { createContext, useState } from 'react';

export const ModalContext = createContext(false);

export const ModalProvider = ({ children }) => {
  const [modalState, setModalState] = useState(false)
  const toggleModal = (e) => {
    setModalState(!modalState);
  }

  const modalData = {modalState, toggleModal}
  return (
    <ModalContext.Provider value={ modalData }>
      { children }
    </ModalContext.Provider>
  )
}