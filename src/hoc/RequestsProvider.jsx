import React, { createContext } from 'react';
import axios from 'axios';

export const RequestsContext = createContext();

export const RequestsProvider = ({ children }) => {

  // get dashboard
    function getDashboardReq() {
      return axios.get('http://localhost:4000/dashboard')
        .then((res) => res.data)
        .catch(err => {throw new Error(err)})
    }
  // /get dashboard

  // get tasks
    function getTasksReq(endPoint, listId) {
      return axios.get(listId ? endPoint + listId : endPoint)
        .then(res => res.data)
        .catch(err => { throw new Error(err) })
    }
  // /get tasks

    // create new task -- anywhere
    function createTaskReq(newTask) {
      return axios.post('http://localhost:4000/tasks', newTask)
        .then(res => res.data)
        .catch(err => {throw new Error(err)})
    }
  // create new task -- anywhere

  // update task -- /tasks/id
    function updateTaskReq(taskId, newValues) {
      return axios.patch(`http://localhost:4000/tasks/${taskId}`, newValues)
        .then(res => res.data)
        .catch(err => {throw new Error(err)})
    }
  // /update task -- /tasks/id

  // delete task -- /tasks/id
    function deleteTaskReq(taskId) {
      return axios.delete(`http://localhost:4000/tasks/${taskId}`)
        .then(res => res.data)
        .catch(err => {throw new Error(err)})
    }
  // /delete task

  // create list
    function createListReq(name) {
      return axios.post('http://localhost:4000/lists', {'name': name})
        .then(res => res.data)
        .catch(err => { throw new Error(err)})
    }
  // /create list

  // delete list
    function deleteListReq(listId) {
      return axios.delete(`http://localhost:4000/lists/${listId}`)
        .then(res => res.data)
        .catch(err => {throw new Error(err)})
    }
  // /delete list

  const requestsData = { getTasksReq, createTaskReq, updateTaskReq, deleteTaskReq, getDashboardReq, createListReq, deleteListReq}
  return (
    <RequestsContext.Provider value={ requestsData }>
      { children } 
    </RequestsContext.Provider>
  )
}