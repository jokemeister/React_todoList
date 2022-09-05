import React, { useContext, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { FilterContext } from '../hoc/FilterProvider';
import { RequestsContext } from '../hoc/RequestsProvider';
import { TasksContext } from '../hoc/TasksProvider';

export const useTasks = () => {
  const { getTasks, getTodayTasks, getTasksByListId } = useContext(RequestsContext);
  let location = useLocation();
  let { id } = useParams();
  id = parseInt(id);
  const { tasks, setTasks, oneTask } = useContext(TasksContext);
  const { setFilteredTasks } = useContext(FilterContext);

  useEffect(() => {
    if (location.pathname === '/today') {
      console.log(location.pathname);
        getTodayTasks().then(setTasks);
    } else if (location.pathname === '/tasks') {
      console.log(location.pathname);
        getTasks().then(setTasks);
    } else {
      console.log(location.pathname, id);
        getTasksByListId(id).then(res => {console.log(res); setTasks(res)});
    };
  }, [location.pathname, oneTask]);

  useEffect(() => {
    setFilteredTasks(tasks)
  }, [tasks])

}