import React from 'react';
import { Outlet } from 'react-router-dom';

export default function Layout() {
    return (
        <>
        <h2 className="text-red-50">layout</h2>
            <Outlet />
        </>
    )
}