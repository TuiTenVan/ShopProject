import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Form, Input, Button, Select, DatePicker, Row, Col, message } from 'antd';
import { register } from '../../services/AuthService';
import './Register.css';

const { Option } = Select;

function Register() {
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const handleFinish = async (values) => {
    try {
      const response = await register(values);
      console.log('Registration successful:', response);
      if (response.user === null) {
        message.error('Phone number already exists!');

      }
      else {
        message.success('Registration successful!');
        navigate('/login');
      }

    } catch (error) {
      console.error('Registration failed:', error);
    }
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
                <Form
                  form={form}
                  onFinish={handleFinish}
                  layout="vertical"
                >
                  <Form.Item
                    label="Full Name"
                    name="fullName"
                    rules={[{ required: true, message: 'Please input your full name!' }]}
                  >
                    <Input />
                  </Form.Item>

                  <Form.Item
                    label="Email"
                    name="email"
                    rules={[{ required: true, message: 'Please input your email!', type: 'email' }]}
                  >
                    <Input />
                  </Form.Item>

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

                  <Row gutter={16}>
                    <Col span={12}>
                      <Form.Item
                        label="Gender"
                        name="gender"
                        rules={[{ required: true, message: 'Please select your gender!' }]}
                      >
                        <Select placeholder="Select Gender">
                          <Option value="male">Male</Option>
                          <Option value="female">Female</Option>
                          <Option value="other">Other</Option>
                        </Select>
                      </Form.Item>
                    </Col>
                    <Col span={12}>
                      <Form.Item
                        label="Birth Date"
                        name="birthDate"
                      >
                        <DatePicker format={{
                          format: 'YYYY-MM-DD',
                          type: 'mask',
                        }} style={{ width: '100%' }} />
                      </Form.Item>
                    </Col>
                  </Row>

                  <Form.Item
                    label="Address"
                    name="address"
                  >
                    <Input />
                  </Form.Item>

                  <Form.Item>
                    <Button htmlType="submit" className="btn_register">
                      Register
                    </Button>
                  </Form.Item>
                </Form>

                <h5 className="login_link">Already have an account? <Link to="/login" className="login_here">Login here</Link></h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
