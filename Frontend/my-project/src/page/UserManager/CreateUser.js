import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Input, Button, DatePicker, Select, Row, Col, message } from 'antd';
import GoBack from '../../components/GoBack';
import { addUser } from '../../services/UserService';

const { Option } = Select;

function CreateUser() {
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const onFinish = async (values) => {
    try {
      const userData = {
        fullName: values.fullName,
        email: values.email,
        phoneNumber: values.phoneNumber,
        address: values.address,
        birthDate: values.birthDate ? values.birthDate.format('YYYY-MM-DD') : null,
        role: values.role,
        gender: values.gender,
        password: values.password,
      };

      // Gọi hàm addUser để thêm người dùng
      const userResponse = await addUser(userData);
      console.log(userResponse);
      message.success('Người dùng đã được thêm thành công');
      navigate("/user-manager");
    } catch (error) {
      message.error('Có lỗi xảy ra. Vui lòng thử lại.');
    }
  };

  return (
    <div className="add-employee">
      <h3 className='add-user' style={{ marginBottom: 30 }}>Thêm nhân viên mới</h3>
      <GoBack />
      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        style={{ marginTop: 25 }}
      >
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name="fullName"
              label="Tên"
              rules={[{ required: true, message: 'Vui lòng nhập tên' }]}
            >
              <Input placeholder="Nhập tên nhân viên" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="phoneNumber"
              label="Số điện thoại"
              rules={[{ required: true, message: 'Vui lòng nhập số điện thoại' }]}
            >
              <Input placeholder="Nhập số điện thoại" />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={24}>
            <Form.Item
              name="email"
              label="Email"
              rules={[{ required: true, message: 'Vui lòng nhập email' }]}
            >
              <Input type="email" placeholder="Nhập email" />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
        
          <Col span={24}>
            <Form.Item
              name="address"
              label="Địa chỉ"
              rules={[{ required: true, message: 'Vui lòng nhập địa chỉ' }]}
            >
              <Input placeholder="Nhập địa chỉ" />
            </Form.Item>
          </Col>
        </Row>
    
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name="password"
              label="Mật khẩu"
              rules={[{ required: true, message: 'Vui lòng nhập mật khẩu' }]}
            >
              <Input.Password placeholder="Nhập mật khẩu" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="confirmPassword"
              label="Xác nhận mật khẩu"
              dependencies={['password']}
              rules={[
                { required: true, message: 'Vui lòng xác nhận mật khẩu' },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue('password') === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject('Mật khẩu xác nhận không khớp');
                  },
                }),
              ]}
            >
              <Input.Password placeholder="Xác nhận mật khẩu" />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name="birthDate"
              label="Ngày sinh"
              rules={[{ required: true, message: 'Vui lòng chọn ngày sinh' }]}
            >
              <DatePicker style={{ width: '100%' }} />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="role"
              label="Chức vụ"
              rules={[{ required: true, message: 'Vui lòng chọn chức vụ' }]}
            >
              <Select placeholder="Chọn chức vụ">
                <Option value="admin">Quản lý</Option>
                <Option value="user">Người dùng</Option>
              </Select>
            </Form.Item>
          </Col>
         
        </Row>
        <Row gutter={16}>  
          <Col span={8}>
            <Form.Item
              name="gender"
              label="Giới tính"
              rules={[{ required: true, message: 'Vui lòng chọn giới tính' }]}
            >
              <Select placeholder="Chọn giới tính">
                <Option value="male">Nam</Option>
                <Option value="female">Nữ</Option>
                <Option value="other">Khác</Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Thêm người dùng
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default CreateUser;
