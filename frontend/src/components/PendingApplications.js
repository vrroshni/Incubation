import React, { useEffect, useState,useContext } from 'react'
import Header from '../components/Header'
import Logo from '../components/Logo'
import AdminSideBar from '../components/AdminSideBar'
import axios from "axios";
import AuthContext from '../context/AuthContext';

function PendingApplications() {
    const [data, setData] = useState([])
    const Swal = require("sweetalert2")
    const { viewdetail, viewDetails } = useContext(AuthContext)


    useEffect(() => {
        axios.get("http://127.0.0.1:8000/pending/").then((response) => {
            setData(response.data)

        })
        console.log(data, "ssssssssssssssssss")

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
                axios.post(`http://127.0.0.1:8000/approve/${id}/`).then(() =>

                    window.location.reload())
            }
        })
        console.log(data)
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
                    <div className="col-lg-12">
                        {data.length === 0 ? (<div className="card">

                            <div className="card-header justify-content-center">
                                <h2 className="card-title"><strong>NO PENDING APPLICATIONS LEFT</strong></h2>
                            </div></div>) : (<div className="card">

                                <div className="card-header">
                                    <h4 className="card-title"><strong>PENDING APPLICATIONS</strong></h4>
                                </div>
                                <div className="card-body">
                                    <div className="table-responsive">
                                        <table className="table table-responsive-md">
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
                                                            <td><strong>{id + 1}</strong></td>
                                                            <td>{list.date}</td>
                                                            <td><a>
                                                                <strong>#{list.id}</strong></a> by <strong>{list.fullname}</strong><br /><a >{list.email}</a><br />
                                                                {list.company_name}
                                                            </td>
                                                            <td><span onClick={() => viewDetails(list.id)} data-bs-toggle="modal" data-bs-target="#exampleModalCenter" className="btn btn-rounded btn-primary btn-xxs">View</span></td>
                                                            <td><span className="btn btn-rounded btn-dark  btn-xxs">{list.status}</span></td>
                                                            <td><span className="badge  badge-success" onClick={() => approveList(list.id)}>Approve</span></td>
                                                            <td><span className="badge  badge-danger" onClick={() => declineList(list.id)}>Decline</span></td>
                                                        </tr>
                                                    )
                                                })}

                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>)}
                    </div>

                </div>

            </div>
        </div>
    )
}

export default PendingApplications