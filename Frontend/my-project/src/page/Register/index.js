import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css'; // Import CSS file for styling

const Register = () => (
  <>
    <div className="breadcrumbs_area other_bread">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="breadcrumb_content">
              <ul>
                <li><Link to={"/"}>Home</Link></li>
                <li>/</li>
                <li>Register</li>
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
              <h2 className="register_heading">Register</h2>
              <form action="#">
                <div className="form_group">
                  <label>Email address <span>*</span></label>
                  <input type="text" className="form_control" />
                </div>
                <div className="form_group">
                  <label>Password <span>*</span></label>
                  <input type="password" className="form_control" />
                </div>
                <div className="login_submit">
                  <button type="submit" className="btn_register">Register</button>
                </div>
              </form>
              <h5 className="login_link">Already have an account? <Link to="/login" className="login_here">Login here</Link></h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default Register;
