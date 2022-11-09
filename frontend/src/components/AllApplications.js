import React, { useEffect, useState } from 'react'
import axios from 'axios';

function AllApplications() {
    const [allapplications, setAllapplications] = useState([])
    // useEffect(() => {
    //  axios.get('http://127.0.0.1:8000/applications/').then((response)=>{
    //     console.log(response.status)
    //     setAllapplications(response.data)
    //     console.log(allapplications)

    //  })
      
    // }, [])
    useEffect(() => {
        axios.get("http://127.0.0.1:8000/applications/").then((response)=>{
            console.log(response.data)
            setAllapplications(response.data)
        
       }) 
     }, []);
    
    return (
        <div>
            <div className="content-body">
                <div className="container-fluid">
                    
                    <div className="col-lg-12">
                        <div className="card ">
                            <div className="card-header justify-content-center">
                                <h4 className="card-title"><b>ALL APPLICATIONS</b></h4>
                            </div>
                            <div className="card-body">
                                <div className="table-responsive">
                                    <table className="table table-hover table-responsive-sm">
                                        <thead>
                                            <tr className='text-dark'>
                                                <th >#</th>
                                                <th>Name</th>
                                                <th>Status</th>
                                                <th>Date</th>
                                                <th>Price</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th>1</th>
                                                <td>Kolor Tea Shirt For Man</td>
                                                <td><span className="badge badge-primary light">Sale</span>
                                                </td>
                                                <td>January 22</td>
                                                <td className="color-primary">$21.56</td>
                                            </tr>
                                            <tr>
                                                <th>2</th>
                                                <td>Kolor Tea Shirt For Women</td>
                                                <td><span className="badge badge-success">Tax</span>
                                                </td>
                                                <td>January 30</td>
                                                <td className="color-success">$55.32</td>
                                            </tr>
                                            <tr>
                                                <th>3</th>
                                                <td>Blue Backpack For Baby</td>
                                                <td><span className="badge badge-danger light">Extended</span>
                                                </td>
                                                <td>January 25</td>
                                                <td className="color-danger">$14.85</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default AllApplications