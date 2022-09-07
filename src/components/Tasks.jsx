import React from 'react';
import { useSelector } from 'react-redux';

import { SingleTask } from './SingleTask';

export const Tasks = props => {
    const { updateTask, deleteTask, addBadge } = props;
    const filteredTasks = useSelector(state => state.tasks.filteredTasks);

    return (
        <>
            {   
                filteredTasks && filteredTasks.map(t => 
                    <SingleTask 
                        key = { 'list_' + t.list_id + '_task_' + t.id }
                        task = { t }
                        updateTask = { updateTask }
                        deleteTask = { deleteTask }
                        addBadge = { addBadge }
                    />
                ) 
            }
        </>
    )
}