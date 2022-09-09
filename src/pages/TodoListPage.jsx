import React from 'react';
import { Tasks } from '../components/Tasks';
import { TaskForm } from '../components/TaskForm';
import { useTasks } from '../hooks/useTasks';
import { useParams } from 'react-router-dom';

export const TodoListPage = () => {
    let { listId } = useParams(); 
    listId = parseInt(listId);
    const { createTask, updateTask, deleteTask } = useTasks(`http://localhost:4000/lists/${listId}/tasks?all=true`, listId);

    return (
        <div className="content show-all">
            <TaskForm createTask = { createTask } updateTask = { updateTask }/>
            <Tasks updateTask = { updateTask } deleteTask = { deleteTask } />
        </div>
    )
}