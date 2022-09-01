import React, { createContext, useState } from 'react';

export const FilterContext = createContext(null);

export const FilterProvider = ({ children }) => {
  const [filterRules, setFilterRules] = useState([])

  const addRule = (key, value) => {
    let rule = [];

    if (value === "true") value = true;
    else if (value === "false") value = false
    
    if (value !== "any") rule = [key, value];

    console.log(rule);

    filterRules.filter(rule => rule[0] !== key)
    setFilterRules([...filterRules, rule]);
  }

  const filterData = { filterRules, addRule }

  return (
    <FilterContext.Provider value={ filterData }>
      { children }
    </FilterContext.Provider>
  )
}