import React from 'react'
import AdminSideBar from '../components/AdminSideBar'
import AllApplications from '../components/AllApplications'
import Header from '../components/Header'
import Logo from '../components/Logo'

function AdminHome() {
    return (
        <div>
            <Logo />
            <Header />
            <AdminSideBar />
            <AllApplications />
        </div>

    )
}

export default AdminHome