import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import propic from '../img/1.png'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Header() {

  const { user, logoutUser } = useContext(AuthContext);
  const Navigate = useNavigate()
  const Swal = require("sweetalert2")

  const confirm = () => {
    Swal.fire({
      title:"Are you Sure",
        text:"you want to logout?",
        icon:"warning",
        showCancelButton:"true",
        confirmButtonColor:"#3085D6",
        cancelButtonColor:"#d33",
        confirmButtonText:"YES,Logout",
      }).then((result)=>{
        if(result.isConfirmed){
        logoutUser()
        toast.info('You are logged Out!', {
          position: "top-right",
          autoClose: 6000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          });
        }
  }
)}


  return (
    <div>
      <div className="header">
        <div className="header-content">
          <nav className="navbar navbar-expand">
            <div className="collapse navbar-collapse justify-content-between">
              <div className="header-left">
                <div className="dashboard_bar">
                  
                </div>
              </div>
              {user ? (
                <ul className="navbar-nav header-right">
                  <li className="nav-item dropdown header-profile">
                    <a className="nav-link" href="/" role="button" data-bs-toggle="dropdown">
                      <img src={propic} alt="" />
                      <div className="header-info ms-3">
                        <span>{user.username}</span>
                        {/* <small>Superadmin</small> */}
                      </div>
                    </a>
                    <div className="dropdown-menu dropdown-menu-end">
                      <p className="dropdown-item ai-icon">
                        <svg id="icon-user1" xmlns="http://www.w3.org/2000/svg" className="text-primary" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                        <span className="ms-2" onClick={()=>Navigate('/profile')}>Profile </span>
                      </p>

                      <p className="dropdown-item ai-icon">
                        <svg id="icon-logout" xmlns="http://www.w3.org/2000/svg" className="text-danger" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>
                        <span className="ms-2" onClick={confirm}>Logout </span>
                      </p>
                    </div>
                  </li>
                </ul>) : (
                <ul className="navbar-nav header-right">
                  <li className="nav-item dropdown header-profile">
                    <a className="nav-link" href="/" role="button" data-bs-toggle="dropdown">
                      <div className="header-info ms-3">
                        <span className='btn btn-primary text-white'>Login</span>
                        {/* <small>Superadmin</small> */}
                      </div>
                    </a>
                    <div className="dropdown-menu dropdown-menu-end">
                      <p className="dropdown-item ai-icon">
                        <svg id="icon-user1" xmlns="http://www.w3.org/2000/svg" className="text-primary" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                        <span className="ms-2" onClick={() => {
                          Navigate('/login')
                        }}>Login</span>
                      </p>
                    </div>
                  </li>
                </ul>
              )}
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Header;
