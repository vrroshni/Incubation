import React, { useEffect, useState,useContext } from 'react'
import Header from '../components/Header'
import Logo from '../components/Logo'
import AuthContext from '../context/AuthContext'

function HomePage() {
  const [notes, setNotes] = useState([])
  let {authTokens,logoutUser,user}=useContext(AuthContext)
  useEffect(() => {
    getNotes()

  }, [])
  let getNotes = async() =>{
    let response = await fetch('http://127.0.0.1:8000/api/notes/', {
        method:'GET',
        headers:{
            'Content-Type':'application/json',
            'Authorization':'Bearer ' + String(authTokens.access)
        }
    })
    let data = await response.json()
    if(response.status === 200){
      setNotes(data)
  }else if(response.statusText === 'Unauthorized'){
      logoutUser()
  }
  }
  return (
    <div>
       
      <Logo/>
        <Header/>
        <div class="content-body">
			<div class="container-fluid">
        <h1 className='text-dark' >welcome to WeHelp.....</h1>

        <ul>
          {user && notes.map(note=>(
            <li key={note.id}>{note.body}</li>
          ))}
        </ul>
        </div>
        </div>
    </div>
  )
}

export default HomePage