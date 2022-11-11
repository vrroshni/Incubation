import React, { useEffect, useState,useContext } from 'react'
import Header from '../components/Header'
import Logo from '../components/Logo'
import AdminSideBar from '../components/AdminSideBar'
import AuthContext from '../context/AuthContext';


import axios from "axios";

function ApprovedApplications() {
    const [data, setData] = useState([])
    const { viewdetail, viewDetails } = useContext(AuthContext)
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
                    <div className="col-lg-12">
                        {data.length === 0 ? (<div className="card">

                            <div className="card-header justify-content-center">
                                <h2 className="card-title"><strong>NO APPROVED APPLICATIONS AVAILABLE</strong></h2>
                            </div></div>) : (
                            <div className="card">
                                <div className="card-header">
                                    <h3 className="card-title"><strong> APPROVED APPLICATIONS</strong></h3>
                                </div>
                                {data ? <div className="card-body">
                                    <div className="table-responsive">
                                        <table className="table table-responsive-md">
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
                                                            <td><span onClick={() => viewDetails(list.id)} data-bs-toggle="modal" data-bs-target="#exampleModalCenter" className="btn btn-rounded btn-primary btn-xxs">View</span></td>
                                                            <td><span className="btn btn-rounded btn-success btn-xxs" >{list.status}</span></td>
                                                            <td><span className="btn btn-rounded btn-primary btn-xxs">Processing<span
                                                                className="ms-1 fa fa-redo"></span></span><br />
                                                            </td>
                                                        </tr>
                                                    )
                                                })}

                                            </tbody>
                                        </table>
                                    </div>
                                </div> : <h1>NO APPROVED APPLICATIONS</h1>}
                            </div>)}
                            <div className="modal fade" id="exampleModalCenter">
                            <div className="modal-dialog modal-dialog-centered" role="document">
                                
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title">{viewdetail && viewdetail.company_name} </h5>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal">
                                        </button>
                                    </div>
                                    <div className="modal-body">
                                        <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-danger light">Close</button>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ApprovedApplications