import { Routes, Route } from 'react-router-dom';

import { Layout } from './components/Layout';

import { ListPage, DashboardPage, TodayPage } from './pages';

export const Router = () => {
    return (
        <Routes>
            <Route path='/' element={ <Layout /> }>
                <Route path='/tasks' element={ <ListPage /> } />
                <Route path='/dashboard' element={ <DashboardPage /> } />
                <Route path='/collection/today' element={ <TodayPage /> } />
            </Route>
        </Routes>
    )
}