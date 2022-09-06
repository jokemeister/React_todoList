import React from 'react';

import { SingleTask } from './SingleTask';

export const Tasks = props => {
    const { filteredTasks, updateTask, deleteTask, addBadge } = props;

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