import React from 'react';
import { useEffect } from 'react';
import { useState, useContext } from 'react';
import { FilterContext } from '../hoc/FilterProvider';
import { SingleTask } from './SingleTask';

export const Tasks = () => {
    const [tasks, setTasks] = useState([
        {
          id: 1,
          name: "Увімкнути тахометр",
          description: "Інакше буде боляче",
          done: true,
          due_date: new Date('2022-08-22'),
          list_id: 1
        },
        {
          id: 2,
          name: "Доробити верстку макету",
          done: false,
          due_date: new Date('2022-08-20'),
          list_id: 2
        },
        {
          id: 3,
          name: "Піти додому",
          description: "Інакше мене зачинять у офісі",
          done: false,
          due_date: new Date('2022-08-25'),
          list_id: 3
        }
    ])

    const [filteredTasks, setFilteredTasks] = useState([])

    const { filterRules } = useContext(FilterContext)

    useEffect(() => {
        filterTasks(filterRules);
    }, [filterRules])

    useEffect(() => {
        filterTasks(filterRules);
    }, [tasks])

    const filterTasks = ([...rules]) => {
        if (rules.length >= 1) rules.forEach(rule => setFilteredTasks(tasks.filter(t => t[rule[0]] === rule[1])))
        else setFilteredTasks(tasks);
    }

    return (
        <>
            {   filteredTasks.map(t => 
                    <SingleTask 
                        key = { 'list_' + t.list_id + '_task_' + t.id }
                        tasks = { tasks }
                        setTasks = { setTasks }
                        index = { tasks.indexOf(t) }
                        t = { t }
                    />
                ) 
            }
        </>
    )
}