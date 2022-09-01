import React, { createContext, useState } from 'react';

export const ListContext = createContext(null);

export const ListProvider = ({ children }) => {
  const [list, setList] = useState('Поточні завдання');

  const listData = { list, setList }
  return (
    <ListContext.Provider value={ listData }>
      { children } 
    </ListContext.Provider>
  )
}