import React from 'react'
import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import { Navigate, Outlet } from 'react-router-dom'



function AdminRoute() {
    const { user } = useContext(AuthContext);
    return (
        !user.is_superuser ? <Navigate to="/restricted"/> : <Outlet />
    )
}

export default AdminRoute