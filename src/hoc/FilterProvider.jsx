import React, { createContext, useState } from 'react';

export const FilterContext = createContext([]);

export const FilterProvider = ({ children }) => {
  const [ filterRule, setFilterRule ] = useState([]);

  const filterData = { filterRule, setFilterRule }

  return (
    <FilterContext.Provider value={ filterData }>
      { children }
    </FilterContext.Provider>
  )
}