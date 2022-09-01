import React from 'react';
import { Tasks } from '../components/Tasks';
import { TaskForm } from '../components/TaskForm';

export const TasksPage = () => {

    return (
        <div className="content show-all">
            <TaskForm />
            <Tasks />
        </div>
    )
}