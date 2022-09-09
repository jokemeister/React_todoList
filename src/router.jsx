import { Routes, Route } from 'react-router-dom';

import { Layout } from './components/Layout';

import { TodoListPage, TodayTasksPage } from './pages';

export const Router = () => {
    return (
        <Routes>
            <Route path='/' element={ <Layout /> }>
                <Route path='/todo-list/:listId' element={ <TodoListPage /> } />
                <Route path='/today' element={ <TodayTasksPage /> } />
            </Route>
        </Routes>
    )
}