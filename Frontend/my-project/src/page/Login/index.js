import React from 'react';
import { Link } from 'react-router-dom';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import './Login.css';

function Login() {

  return (
    <>
      <div className="breadcrumbs_area other_bread">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="breadcrumb_content">
                <ul>
                  <li><Link to={"/"}>Home</Link></li>
                  <li>/</li>
                  <li>Login</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="customer_login">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-8 mx-auto">
              <div className="account_form">
                <h2 className='title_login'>Login</h2>
                <form action="#">
                  <div className="form_group">
                    <label>Username or email <span>*</span></label>
                    <input type="text" className="form_control" />
                  </div>
                  <div className="form_group">
                    <label>Password <span>*</span></label>
                    <input type="password" className="form_control" />
                  </div>
                  <div className="login_submit">
                    <a href="#">Lost your password?</a>
                    <button type="submit" className="btn_login">Login</button>
                  </div>
                </form>
                <h5 className='register_link'>Don't have an account? <Link to="/register"><span className='here'>Register here</span></Link></h5>

                <div className="google_login">
                  <p>Or login with:</p>
                  <GoogleLogin
                    onSuccess={credentialResponse => {
                      console.log(credentialResponse);
                    }}
                    onError={() => {
                      console.log('Login Failed');
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
