import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Logo from '../components/Logo'
import AdminSideBar from '../components/AdminSideBar'


import axios from "axios";

function ApprovedApplications() {
    const [data, setData] = useState([])
    const Swal = require("sweetalert2")
    console.log(data, "ssssssssssssssssss")
    useEffect(() => {
        axios.get("http://127.0.0.1:8000/approved/").then((response) => {
            setData(response.data)
        })
    }, []);
    return (
        <div>
            <Logo />
            <Header />
            <AdminSideBar />
            <div className='content-body'>
                <div className='container-fluid'>
                    <div class="col-lg-12">
                        <div class="card">
                            <div class="card-header justify-content-center">
                                <h3 class="card-title"><strong> APPROVED APPLICATIONS</strong></h3>
                            </div>
                            {data ?<div class="card-body">
                                <div class="table-responsive">
                                    <table class="table table-responsive-md">
                                        <thead>
                                            <tr>
                                                <th><strong>#</strong></th>
                                                <th><strong>DATE</strong></th>
                                                <th><strong>NAME</strong></th>
                                                <th><strong>VIEW</strong></th>
                                                <th><strong>STATUS</strong></th>
                                                <th><strong>ACTIONS</strong></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {data.map((list, id) => {
                                                return (
                                                    <tr>
                                                        <td><strong>{id + 1}</strong></td>
                                                        <td>{list.date}</td>
                                                        <td><a>
                                                            <strong>#{list.id}</strong></a> by <strong>{list.fullname}</strong><br /><a >{list.email}</a><br />
                                                            {list.company_name}
                                                        </td>
                                                        <td><span class="btn btn-rounded btn-primary btn-xxs">View</span></td>
                                                        <td><span className="btn btn-rounded btn-danger btn-xxs" >{list.status}</span></td>
                                                        <td><span class="btn btn-rounded btn-primary btn-xxs">Processing<span
                                                            class="ms-1 fa fa-redo"></span></span><br />
                                                        </td>
                                                    </tr>
                                                )
                                            })}

                                        </tbody>
                                    </table>
                                </div>
                            </div>: <h1>NO APPROVED APPLICATIONS</h1>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )  
}

export default ApprovedApplications