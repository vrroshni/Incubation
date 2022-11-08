import React, { useContext } from 'react'
import AuthContext from '../context/AuthContext'
import {Link,useHistory} from 'react-router-dom'

function LoginPage() {
  const { loginUser } = useContext(AuthContext)
  const history=useHistory()
  return (
    <div className="vh-100">
      
      {/* <form onSubmit={loginUser} >
            <input type="text" name='username' placeholder='Enter username'/>
            <input type="password" name='password' placeholder='Enter password'/>
            <input type="submit" />
        </form> */}
      <div className="authincation h-100">
        <div className="container h-100">
          <div className="row justify-content-center h-100 align-items-center">
            <div className="col-md-6">
              <div className="authincation-content">
                <div className="row no-gutters">
                  <div className="col-xl-12">
                    <div className="auth-form">
                      <div className="text-center mb-3">
                        <a href="\"><img src="images/logo-full.png" alt="" /></a>
                      </div>
                      <h4 className="text-center mb-4">Sign in your account</h4>
                      <form onSubmit={loginUser}>
                        <div className="mb-3">
                          <label className="mb-1"><strong>Username</strong></label>
                          <input type="text" className="form-control" name='username' placeholder='Username' />
                        </div>
                        <div className="mb-3">
                          <label className="mb-1"><strong>Password</strong></label>
                          <input type="password" className="form-control" name='password' placeholder="Password" />
                        </div>
                        
                        <div className="text-center">
                          <button type="submit" className="btn btn-primary btn-block">Sign Me In</button>
                        </div>
                      </form>
                      <div className="new-account mt-3">
                        <p>Don't have an account? <span className="text-primary" ><Link to='/register' style={{color:"#1362fc"}}> Sign up</Link></span></p>
                      </div>
                    </div>
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

export default LoginPage