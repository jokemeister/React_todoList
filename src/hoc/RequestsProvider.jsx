import React, { createContext, useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';

export const RequestsContext = createContext();

export const RequestsProvider = ({ children }) => {
  const [url, setUrl] = useState('http://localhost:4000/tasks');

  // get all tasks -- /tasks
    function getTasks() {
      return axios.get(url)
        .then((res) => res.data)
        .catch((err) => {throw new Error(err)})
    }
  // /get all tasks -- /tasks

  // create new task -- anywhere
    function createTask(newTask) {
      return axios.post('http://localhost:4000/tasks', newTask)
          .then(res => res.data)
          .catch(err => {throw new Error(err)})
    }
  // create new task -- anywhere

  // update task -- /tasks/id
    function updateTask(taskId, newValues) {
      return axios.patch(`http://localhost:4000/tasks/${taskId}`, newValues)
        .then(res => res.data)
        .catch(err => {throw new Error(err)})
    }
  // /update task -- /tasks/id

  // delete task -- /tasks/id
    function deleteTask(taskId) {
      return axios.delete(`http://localhost:4000/tasks/${taskId}`)
        .then(res => res.data)
        .catch(err => {throw new Error(err)})
    }
  // /delete task

  // get dashboard
    function getDashboard() {
      return axios.get('http://localhost:4000/dashboard')
        .then((res) => res.data)
        .catch((err) => {throw new Error(err)})
    }
  // /get dashboard

  // get today
    function getTodayTasks() {
      return axios.get('http://localhost:4000/collection/today')
        .then((res) => res.data)
        .catch((err) => {throw new Error(err)})
    }
  // get today


  // get by list id
    function getListTasks() {
      return axios.get('http://localhost:4000/collection/today')
        .then((res) => res.data)
        .catch((err) => {throw new Error(err)})
    }
  // 

  const requestsData = { url, setUrl, getTasks, createTask, updateTask, deleteTask, getDashboard, getTodayTasks }
  return (
    <RequestsContext.Provider value={ requestsData }>
      { children } 
    </RequestsContext.Provider>
  )
}