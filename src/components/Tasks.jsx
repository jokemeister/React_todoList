import React, { useState, useEffect, useContext } from 'react';

import { FilterContext } from '../hoc/FilterProvider';
import { TasksContext } from '../hoc/TasksProvider';
import { useTasks } from '../hooks/useTasks';
import { SingleTask } from './SingleTask';

export const Tasks = () => {
    const { filteredTasks } = useContext(FilterContext);
    const { tasks } = useContext(TasksContext);

    useTasks();

    return (
        <>
        {console.log('tasks', tasks)}
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