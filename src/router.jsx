import { Routes, Route } from 'react-router-dom';

import { Layout } from './components/Layout';

import { TasksPage, DashboardPage, TodayPage } from './pages';

export const Router = () => {
    return (
        <Routes>
            <Route path='/' element={ <Layout /> }>
                <Route path='/tasks' element={ <TasksPage /> } />
                <Route path='/list:id/tasks' element={ <TasksPage /> } />
                <Route path='/dashboard' element={ <DashboardPage /> } />
                <Route path='/collection/today' element={ <TodayPage /> } />
            </Route>
        </Routes>
    )
}