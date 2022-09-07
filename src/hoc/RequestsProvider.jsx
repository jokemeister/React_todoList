import React, { createContext } from 'react';
import axios from 'axios';

export const RequestsContext = createContext();

export const RequestsProvider = ({ children }) => {

  // update task -- /tasks/id
    function updateTaskReq(taskId, newValues) {
      return axios.patch(`http://localhost:4000/tasks/${taskId}`, newValues)
        .then(res => res.data)
        .catch(err => {throw new Error(err)})
    }
  // /update task -- /tasks/id

  const requestsData = { updateTaskReq }
  return (
    <RequestsContext.Provider value={ requestsData }>
      { children } 
    </RequestsContext.Provider>
  )
}