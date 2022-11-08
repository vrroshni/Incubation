import React from 'react'
import AdminSideBar from '../components/AdminSideBar'
import Header from '../components/Header'
import Logo from '../components/Logo'

function AdminHome() {
    return (
        <div>
            <Logo />
            <Header />
            <AdminSideBar/>
            <div class="content-body">
                <div class="container-fluid">
                    <h1 className='text-dark' >Hello Admin.</h1>
                </div>
            </div>
        </div>
    )
}

export default AdminHome