import React from "react";
import { Outlet } from "react-router-dom";

import { Header } from "./Header";
import { Sidebar } from "./Sidebar";

export const Layout = () => {
    return (
        <>
            <Sidebar />
            <Header />
            
            <main>
                <Outlet />
            </main>
        </>
    )
}