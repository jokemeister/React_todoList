import React from 'react';
import { Tasks } from '../components/Tasks';
import { TaskForm } from '../components/TaskForm';
import { useTasks } from '../hooks/useTasks';

export const TasksPage = () => {
    const { createTask, updateTask, deleteTask } = useTasks('http://localhost:4000/tasks');

    return (
        <div className="content show-all">
            <TaskForm createTask = { createTask } updateTask = { updateTask }/>
            <Tasks updateTask = { updateTask } deleteTask = { deleteTask }/>
        </div>
    )
}