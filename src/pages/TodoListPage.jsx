import React from 'react';
import { Tasks } from '../components/Tasks';
import { TaskForm } from '../components/TaskForm';

export const TodoListPage = () => {

    return (
        <div className="content show-all">
            <TaskForm />
            <Tasks />
        </div>
    )
}