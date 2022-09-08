import React from 'react';
import { TaskForm } from '../components/TaskForm';
import { Tasks } from '../components/Tasks';
import { useTasks } from '../hooks/useTasks';

export const TodayTasksPage = () => {
    const { filteredTasks, createTask, updateTask, deleteTask } = useTasks('http://localhost:4000/collection/today');
    
    return (
        <div className="content show-all">
            <Tasks filteredTasks = { filteredTasks } updateTask = { updateTask } deleteTask = { deleteTask } addBadge = { true }/>
        </div>
    )
}