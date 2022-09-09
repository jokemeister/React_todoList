import React from 'react';
import { Tasks } from '../components/Tasks';
import { useTasks } from '../hooks/useTasks';

export const TodayTasksPage = () => {
    const { updateTask, deleteTask } = useTasks('http://localhost:4000/collection/today');
    
    return (
        <div className="content show-all">
            <Tasks updateTask = { updateTask } deleteTask = { deleteTask } addBadge = { true }/>
        </div>
    )
}