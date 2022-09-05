import React from 'react';
import { Tasks } from '../components/Tasks';
import { TaskForm } from '../components/TaskForm';
import { useTasks } from '../hooks/useTasks';

export const TasksPage = () => {
    const { filteredTasks, createTask, updateTask, deleteTask } = useTasks('http://localhost:4000/tasks');
    console.log('fuck', filteredTasks);

    return (
        <div className="content show-all">
            <TaskForm createTask = { createTask } updateTask = { updateTask }/>
            <Tasks filteredTasks = { filteredTasks } updateTask = { updateTask } deleteTask = { deleteTask }/>
        </div>
    )
}