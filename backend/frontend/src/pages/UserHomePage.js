import React, { useEffect, useState,useContext } from 'react'
import Header from '../components/Header'
import Logo from '../components/Logo'
import AuthContext from '../context/AuthContext'
import {useNavigate} from 'react-router-dom'
import homepic from '../img/rocket.webp'

function HomePage() {
  const [notes, setNotes] = useState([])
  let {authTokens,logoutUser,user}=useContext(AuthContext)
  const Navigate=useNavigate()
  return (
    <div>
       
      <Logo/>
        <Header/>
        <div className="content-body" style={{marginLeft: "-4.437rem"}}>
			  <div className="container-fluid">
        <div className='text-center'>
        <h1 className='text-primary' >Hey,Welcome {user && user.username}</h1>
        <h3 className='mt-2'>Share your Million dollar ideas !</h3>
        <button type="button" className="btn btn-primary btn-sm mt-2" onClick={()=>Navigate('/application')}>Express Your Ideas</button>
        </div>
        <div className='text-center'>
          <img src={homepic} alt="HomePagePic" style={{ width: "664px"}} />
        </div>


        </div>
        </div>
    </div>
  )
}

export default HomePage