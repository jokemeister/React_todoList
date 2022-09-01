import React, { useState, useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { useParams } from 'react-router-dom';

import { FilterContext } from '../hoc/FilterProvider';
import { RequestsContext } from '../hoc/RequestsProvider';
import { TasksContext } from '../hoc/TasksProvider';
import { SingleTask } from './SingleTask';

export const Tasks = () => {
    let location = useLocation();
    let { id } = useParams();
    id = parseInt(id);
    const { getTasks, getTodayTasks } = useContext(RequestsContext);
    const { filterRules } = useContext(FilterContext);
    const { tasks, setTasks } = useContext(TasksContext);

    const [filteredTasks, setFilteredTasks] = useState([]);

    useEffect(() => {
        if (location.pathname === '/today') {
            getTodayTasks().then(setTasks)
        } else {
            if (id) {

            }
            getTasks().then(newTasks => {
                setTasks(newTasks);
            })
        }
    }, []);

    useEffect(() => {
        filterTasks(filterRules);
    }, [tasks, filterRules])

    const filterTasks = ([...filterRules]) => {
        // console.log('shit', tasks);
        if (filterRules.length >= 1) filterRules.forEach(rule => setFilteredTasks(tasks.filter(t => t[rule[0]] === rule[1])))
        else setFilteredTasks(tasks);
    }

    return (
        <>
            {   
                filteredTasks.map(t => 
                    <SingleTask 
                        key = { 'list_' + t.list_id + '_task_' + t.id }
                        index = { tasks.indexOf(t) }
                        task = { t }
                    />
                ) 
            }
        </>
    )
}