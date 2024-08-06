import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { Form, Input, Button, Divider, message } from 'antd';
import { login } from '../../services/AuthService'; 
import './Login.css';

const Login = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const handleFinish = async (values) => {
    try {
      const response = await login(values.phoneNumber, values.password);
      // console.log('Login successful:', response);
      // console.log(response)
      if(response.token === null) {
        message.error('Phone number or password incorrect');
      }
      else{
        if(response.role === 'USER') {
          navigate('/');
        }
        else if(response.role === 'ADMIN') {
          navigate('/admin');
        }
        message.success("Login successful")
      }
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  const handleGoogleLoginSuccess = (credentialResponse) => {
    console.log('Google login successful:', credentialResponse);
  };

  const handleGoogleLoginError = () => {
    console.log('Google login failed');
  };

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
                <Form
                  form={form}
                  onFinish={handleFinish}
                  layout="vertical"
                >
                  <Form.Item
                    label="Phone Number"
                    name="phoneNumber"
                    rules={[{ required: true, message: 'Please input your phone number!' }]}
                  >
                    <Input />
                  </Form.Item>

                  <Form.Item
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                  >
                    <Input.Password />
                  </Form.Item>

                  <Form.Item>
                    <Button type="primary" htmlType="submit" className="btn_login">
                      Login
                    </Button>
                    {/* <a href="#" className="forgot_password">Lost your password?</a> */}
                  </Form.Item>
                </Form>

                <h5 className='register_link'>
                  Don't have an account? <Link to="/register"><span className='here'>Register here</span></Link>
                </h5>

                <Divider>Or login with:</Divider>

                <div className="google_login">
                  <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
                    <GoogleLogin
                      onSuccess={handleGoogleLoginSuccess}
                      onError={handleGoogleLoginError}
                    />
                  </GoogleOAuthProvider>
                </div> 
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
