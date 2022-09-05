import React, { createContext, useState } from 'react';

export const ListsContext = createContext(null);

export const ListsProvider = ({ children }) => {
  const [lists, setLists] = useState([]);
  const [oneList, setOneList] = useState([]);
  const [currentList, setCurrentList] = useState('Усі завдання');
  const listData = { lists, setLists, currentList, setCurrentList, oneList, setOneList }

  return (
    <ListsContext.Provider value={ listData }>
      { children } 
    </ListsContext.Provider>
  )
}