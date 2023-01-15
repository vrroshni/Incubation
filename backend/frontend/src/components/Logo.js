import React from 'react'
import logo from '../img/ori.png'
import { useNavigate } from 'react-router-dom'

function Logo() {
  const Navigate=useNavigate()
  return (
    <div><div className="nav-header">
    <a className="brand-logo"  onClick={()=>Navigate('/')} >
        
        <img  alt='logo' style={{marginLeft: "-3.9375rem"}} src={logo} className="brand-title" width="153px" height="90px" viewBox="0 0 123 68" fill="none" xmlns="http://www.w3.org/2000/svg"/>
        
    </a>
    
</div>
</div>
  )
}

export default Logo