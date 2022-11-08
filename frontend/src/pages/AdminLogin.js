import React from 'react'

function AdminLogin() {
    return (
        <div>
            <div className="vh-100">
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
                                                <h4 className="text-center mb-4">Hello Admin,Sign in your account</h4>
                                                <form>
                                                    <div className="mb-3">
                                                        <label className="mb-1"><strong>Email</strong></label>
                                                        <input type="text" className="form-control" name='username' placeholder='Username' />
                                                    </div>
                                                    <div className="mb-3">
                                                        <label className="mb-1"><strong>Password</strong></label>
                                                        <input type="password" className="form-control" name='password' placeholder="Password" />
                                                    </div>
                                                    <div className="row d-flex justify-content-between mt-4 mb-2">
                                                        <div className="mb-3">
                                                            <div className="form-check custom-checkbox ms-1">

                                                            </div>
                                                        </div>
                                                        <div className="mb-3">
                                                            <a href="\">Forgot Password?</a>
                                                        </div>
                                                    </div>
                                                    <div className="text-center">
                                                        <button type="submit" className="btn btn-primary btn-block">Sign Me In</button>
                                                    </div>
                                                </form>
                                                <div className="new-account mt-3">
                                                    <p>Don't have an account? <a className="text-primary" href="\">Sign up</a></p>
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
        </div>
    )
}

export default AdminLogin