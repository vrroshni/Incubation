import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Logo from '../components/Logo'
import AdminSideBar from '../components/AdminSideBar'
import axios from "axios";

function PendingApplications() {
    const [data, setData] = useState([])
    const Swal = require("sweetalert2")
    console.log(data, "ssssssssssssssssss")
    useEffect(() => {
        axios.get("http://127.0.0.1:8000/pending/").then((response) => {
            setData(response.data)

        })

    }, []);



    const approveList = (id) => {
        Swal.fire({
            title: "are you sure",
            text: "approve the list",
            icon: "warning",
            showCancelButton: "true",
            confirmButtonColor: "#3085D6",
            cancelButtonColor: "#d33",
            confirmButtonText: "YES,Approve",
        }).then((result) => {
            if (result.isConfirmed) {
                axios.post(`http://127.0.0.1:8000/approve/${id}/`).then(() => window.location.reload())
            }
        })

    }

    const declineList = (id) => {
        Swal.fire({
            title: "are you sure",
            text: "decline the list",
            icon: "warning",
            showCancelButton: "true",
            confirmButtonColor: "#3085D6",
            cancelButtonColor: "#d33",
            confirmButtonText: "YES,decline",
        }).then((result) => {
            if (result.isConfirmed) {
                axios.post(`http://127.0.0.1:8000/reject/${id}/`).then(() => window.location.reload())
            }
        })
    }
    return (
        <div>
            <Logo />
            <Header />
            <AdminSideBar />
            <div className='content-body'>
                <div className='container-fluid'>
                    <div class="col-lg-12">
                        <div class="card">
                            <div class="card-header">
                                <h4 class="card-title"><strong>PENDING APPLICATIONS</strong></h4>
                            </div>
                            {data ?  <div class="card-body">
                                <div class="table-responsive">
                                    <table class="table table-responsive-md">
                                        <thead>
                                            <tr>
                                                <th><strong>#</strong></th>
                                                <th><strong>DATE</strong></th>
                                                <th><strong>DETAILS</strong></th>
                                                <th><strong>VIEW</strong></th>
                                                <th><strong>STATUS</strong></th>
                                                <th><strong>APPROVE</strong></th>
                                                <th><strong>DECLINE</strong></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {data.map((list, id) => {
                                                return (
                                                    <tr>
                                                        <td><strong>{id+1}</strong></td>
                                                        <td>{list.date}</td>
                                                        <td><a>
                                                        <strong>#{list.id}</strong></a> by <strong>{list.fullname}</strong><br /><a >{list.email}</a><br />
                                                        {list.company_name}
                                                        </td>  
                                                        <td><span class="btn btn-rounded btn-primary btn-xxs">View</span></td>
                                                        <td><span className= "btn btn-rounded btn-dark  btn-xxs">{list.status}</span></td>
                                                        <td><span class="badge  badge-success" onClick={() => approveList(list.id)}>Approve</span></td>
                                                        <td><span class="badge  badge-danger" onClick={() => declineList(list.id)}>Decline</span></td>
                                                    </tr>
                                                )
                                            })}

                                        </tbody>
                                    </table>
                                </div>
                            </div>:<h1>NO PENDING APPLICATIONS</h1>}
                        </div>
                    </div>

                </div>

            </div>
            </div>
  )
}

export default PendingApplications