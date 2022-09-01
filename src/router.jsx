import { Routes, Route } from 'react-router-dom';

import { Layout } from './components/Layout';

import { TasksPage, TodoListPage, TodayTasksPage } from './pages';

export const Router = () => {
    return (
        <Routes>
            <Route path='/' element={ <Layout /> }>
                <Route path='/tasks' element={ <TasksPage /> } />
                <Route path='/todo-list/:id' element={ <TodoListPage /> } />
                <Route path='/today' element={ <TodayTasksPage /> } />
            </Route>
        </Routes>
    )
}